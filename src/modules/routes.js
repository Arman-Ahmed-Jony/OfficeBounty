import { routes as auth } from './auth'
import { routes as register } from './register'
import { routes as projects } from './projects'
import { routes as dashboard } from './dashboard'

export default [
  ...auth,
  ...register,
  ...projects,
  ...dashboard,
  {
    // Always leave this as last one
    path: '*',
    component: () => import('../pages/Error404')
  }
]
