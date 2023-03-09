import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/login',
    meta: {
      title: 'Login Page',
      Icon: LogoutIcon,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/Login')),
        isFullPage: true,
        meta: {
          title: 'Login Center',
        },
      },
    ],
  },
];

export default result;
