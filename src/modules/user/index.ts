import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'user';
const TOKEN_NAME = 'tdesign-starter';

const initialState = {
  token: localStorage.getItem(TOKEN_NAME) || 'main_token',
  userInfo: {},
};

// login
export const login = createAsyncThunk(`${namespace}/login`, async (userInfo: Record<string, unknown>) => {
  const mockLogin = async (userInfo: Record<string, unknown>) => {
    console.log(userInfo);
    return {
      code: 200,
      message: 'Login success',
      data: 'main_token',
    };
  };

  const res = await mockLogin(userInfo);
  if (res.code === 200) {
    return res.data;
  }
  throw res;
});

export const getUserInfo = createAsyncThunk(`${namespace}/getUserInfo`, async (_, { getState }: any) => {
  const { token } = getState();
  const mockRemoteUserInfo = async (token: string) => {
    if (token === 'main_token') {
      return {
        name: 'td_main',
        roles: ['all'],
      };
    }
    return {
      name: 'td_dev',
      roles: ['userIndex', 'dashboardBase', 'login'],
    };
  };

  const res = await mockRemoteUserInfo(token);

  return res;
});

const userSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(TOKEN_NAME);
      state.token = '';
      state.userInfo = {};
    },
    remove: (state) => {
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem(TOKEN_NAME, action.payload);

        state.token = action.payload;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      });
  },
});

export const selectListBase = (state: RootState) => state.listBase;

export const { logout, remove } = userSlice.actions;

export default userSlice.reducer;
