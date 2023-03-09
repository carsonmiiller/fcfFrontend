import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/user',
    meta: {
      title: 'Profile Page',
      Icon: UserCircleIcon,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/User')),
        meta: {
          title: 'Profile Center',
        },
      },
    ],
  },
];

export default result;
