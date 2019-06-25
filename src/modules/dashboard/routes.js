export default [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout'),
    children: [
      {
        path: 'dashboard',
        component: () => import('./pages/ProjectsIndex'),
        name: 'Dashboard',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
