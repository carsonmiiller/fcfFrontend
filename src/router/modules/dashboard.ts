import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const dashboard: IRouter[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Statistical Reports',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'base',
        Component: lazy(() => import('pages/Dashboard/Base')),
        meta: {
          title: 'Overview Dashboard',
        },
      },
      {
        path: 'detail',
        Component: lazy(() => import('pages/Dashboard/Detail')),
        meta: {
          title: 'Statistical Reports',
        },
      },
    ],
  },
];

export default dashboard;
