import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import dashboard from './modules/dashboard';
import user from './modules/user';
import login from './modules/login';
import home from './modules/home';
import otherRoutes from './modules/others';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  isFullPage?: boolean;
  meta?: {
    title?: string;
    Icon?: React.FC;
    hidden?: boolean;
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/home/index',
  },
];

const allRoutes = [...routes, ...home, ...dashboard, ...user, ...login, ...otherRoutes];

export default allRoutes;
