export default [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout'),
    children: [
      {
        path: 'projects',
        component: () => import('./pages/ProjectsIndex'),
        name: 'ExampleIndex',
        meta: {
          noAuthRequired: true
        }
      }
    ]
  }
]
