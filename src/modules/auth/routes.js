export default [
  {
    // Always leave this as last one
    path: '/',
    // component: () => import('../dashboard/pages/DashboardIndex')
    redirect: '/dashboard'
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout'),
    children: [
      {
        path: '',
        component: () => import('./pages/LoginIndex'),
        name: 'auth',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
