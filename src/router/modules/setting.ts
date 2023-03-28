import { lazy } from 'react';
import { IRouter } from '../index';
import { SlWrench } from "react-icons/sl";

const result: IRouter[] = [
{
    path: '/Setting',
    meta: {
        title: 'Setting Page',
        Icon: SlWrench,
    },
    children: [
    {
        path: 'index',
        Component: lazy(() => import('pages/Setting')),
        isFullPage: true,
        meta: {
            title: 'Setting Page',
        },
    },
    ],
},
];

export default result;
