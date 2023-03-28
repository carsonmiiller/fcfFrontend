import { lazy } from 'react';
import { IRouter } from '../index';
import { AiFillHome } from 'react-icons/ai';

const result: IRouter[] = [
{
    path: '/feeder',
    meta: {
        title: 'Feeder Page',
        Icon: AiFillHome,
    },
    children: [
    {
        path: 'index',
        Component: lazy(() => import('pages/Feeder')),
        isFullPage: true,
        meta: {
            title: 'Feeder Page',
        },
    },
    ],
},
];

export default result;
