import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/model',
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
          title: 'Home Center',
        },
      },
    ],
  },
];

export default result;