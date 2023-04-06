import { lazy } from 'react';
import { IRouter } from '../index';
import { SlEnergy } from "react-icons/sl";

const result: IRouter[] = [
{
    path: '/model_correction',
    meta: {
      title: 'Model Correction Page',
      Icon: SlEnergy,
    },
    children: [
    {
        path: 'index',
        Component: lazy(() => import('pages/model_correction')),
        isFullPage: true,
        meta: {
          title: 'Model Correction Page',
        },
      },
    ],
},
];

export default result;
