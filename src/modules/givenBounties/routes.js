export default [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout'),
    children: [
      {
        path: 'givenBounties',
        component: () => import('./pages/GivenBountiesIndex'),
        name: 'GivenBounties',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
