import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/model',
    meta: {
      title: 'Model Page',
      Icon: LogoutIcon,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/Model')),
        isFullPage: true,
        meta: {
          title: 'Model Center',
        },
      },
    ],
  },
];

export default result;