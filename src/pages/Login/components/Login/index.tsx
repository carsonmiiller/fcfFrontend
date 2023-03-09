import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, MessagePlugin, Input, Checkbox, Button, FormInstanceFunctions, SubmitContext } from 'tdesign-react';
import { LockOnIcon, UserIcon, BrowseOffIcon, BrowseIcon} from 'tdesign-icons-react';
import classnames from 'classnames';
import { useAppDispatch } from 'modules/store';
import { login } from 'modules/user';

import Style from './index.module.less';

const { FormItem } = Form;

export type ELoginType = 'password' | 'phone' | 'qrcode';

export default function Login() {
  const [loginType, changeLoginType] = useState<ELoginType>('password');
  const [showPsw, toggleShowPsw] = useState(false);
  const formRef = useRef<FormInstanceFunctions>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (e: SubmitContext) => {
    if (e.validateResult === true) {
      try {
        const formValue = formRef.current?.getFieldsValue?.(true) || {};
        await dispatch(login(formValue));

        MessagePlugin.success('Login successfully');

        navigate('/dashboard/base');
      } catch (e) {
        console.log(e);
        MessagePlugin.error('Login failed');
      }
    }
  };

  const switchType = (val: ELoginType) => {
    formRef.current?.reset?.();
    changeLoginType(val);
  };

  return (
    <div>
      <Form
        ref={formRef}
        className={classnames(Style.itemContainer, `login-${loginType}`)}
        labelWidth={0}
        onSubmit={onSubmit}
      >
        {loginType === 'password' && (
          <>
            <FormItem name='account' rules={[{ required: true, message: 'Username Required', type: 'error' }]}>
              <Input size='large' placeholder='Please enter the login username: admin' prefixIcon={<UserIcon />}></Input>
            </FormItem>
            <FormItem name='password' rules={[{ required: true, message: 'Password required', type: 'error' }]}>
              <Input
                size='large'
                type={showPsw ? 'text' : 'password'}
                clearable
                placeholder='Please enter the login password: admin'
                prefixIcon={<LockOnIcon />}
                suffixIcon={
                  showPsw ? (
                    <BrowseIcon onClick={() => toggleShowPsw((current) => !current)} />
                  ) : (
                    <BrowseOffIcon onClick={() => toggleShowPsw((current) => !current)} />
                  )
                }
              />
            </FormItem>
            <div className={classnames(Style.checkContainer, Style.rememberPwd)}>
              <Checkbox>Remember account</Checkbox>
              <span className={Style.checkContainerTip}>Forgot your account?</span>
            </div>
          </>
        )}

        {loginType !== 'qrcode' && (
          <FormItem className={Style.btnContainer}>
            <Button block size='large' type='submit'>
              Login
            </Button>
          </FormItem>
        )}
      </Form>
    </div>
  );
}
