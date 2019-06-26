export default [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout'),
    children: [
      {
        path: 'recievedBounties',
        component: () => import('./pages/RecievedBountiesIndex'),
        name: 'RecievedBounties',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
