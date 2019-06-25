import { store as auth } from './auth'
import { store as registration } from './register'
import { store as projects } from './projects'

export default {
  namespaced: true,
  auth,
  registration,
  projects
}
