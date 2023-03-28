import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/home',
    meta: {
      title: 'Home Page',
      Icon: LogoutIcon,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/Home')),
        isFullPage: true,
        meta: {
          title: 'Home Page',
        },
      },
    ],
  },
];

export default result;
