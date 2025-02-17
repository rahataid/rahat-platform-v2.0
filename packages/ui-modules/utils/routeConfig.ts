import { ReactNode } from 'react';
import { AAProjectOverview, GroupDetail, Groups } from '../aa';
import {
  Beneficiaries,
  ProjectOverview,
  TransactionDetail,
  Transactions,
} from '../el-kenya';

export type Route = {
  path: string;
  component?: () => ReactNode;
  children?: Route[];
};

export const routeConfig: Route[] = [
  {
    path: 'el-kenya',
    children: [
      {
        path: ':projectId',
        component: ProjectOverview,
        children: [
          {
            path: 'beneficiaries',
            component: Beneficiaries,
          },
          {
            path: 'transactions',
            component: Transactions,
            children: [
              {
                path: ':transactionId',
                component: TransactionDetail,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'aa',
    children: [
      {
        path: ':projectId',
        component: AAProjectOverview,
        children: [
          {
            path: 'groups',
            component: Groups,
            children: [
              {
                path: ':groupId',
                component: GroupDetail,
              },
            ],
          },
        ],
      },
    ],
  },
];
