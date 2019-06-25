export default [
  {
    path: '/register',
    component: () => import('layouts/AuthLayout'),
    children: [
      {
        path: '',
        component: () => import('./pages/Registration'),
        name: 'Registration',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
