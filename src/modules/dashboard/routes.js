export default [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout'),
    children: [
      {
        path: 'dashboard',
        component: () => import('./pages/DashboardIndex'),
        name: 'Dashboard',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
