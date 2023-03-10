import { lazy } from 'react';
import { LogoutIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
    {
    path: '/feeder',
    meta: {
        title: 'Feeder Page',
        Icon: LogoutIcon,
    },
    children: [
    {
        path: 'index',
        Component: lazy(() => import('pages/Feeder')),
        isFullPage: true,
        meta: {
          title: 'Feeder Center',
        },
      },
    ],
  },
];

export default result;
