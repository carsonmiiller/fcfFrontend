import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/setting',
    meta: {
      title: 'Setting Page',
      Icon: LogoutIcon,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/Setting')),
        isFullPage: true,
        meta: {
          title: 'Setting Center',
        },
      },
    ],
  },
];

export default result;