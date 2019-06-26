import { routes as auth } from './auth'
import { routes as register } from './register'
import { routes as projects } from './projects'
import { routes as dashboard } from './dashboard'
import { routes as givenBounties } from './givenBounties'
import { routes as recievedBounties } from './recievedBounties'
export default [
  ...auth,
  ...register,
  ...projects,
  ...dashboard,
  ...givenBounties,
  ...recievedBounties,
  {
    // Always leave this as last one
    path: '*',
    component: () => import('../pages/Error404')
  }
]
