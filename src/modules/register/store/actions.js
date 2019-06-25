import registerClient from '../api/register'

export const registerUser = ({ commit }, payload) => {
  commit('SET_LOADING', true)
  commit('CLEAR_ERROR')
  // call User Service
  return registerClient.register(payload)
    .then(
      (user) => {
        commit('SET_LOADING', false)
      })
    .catch(error => {
      let errorMessage = error.response.data
      commit('SET_LOADING', false)
      commit('SET_ERROR', errorMessage)
    })
}
