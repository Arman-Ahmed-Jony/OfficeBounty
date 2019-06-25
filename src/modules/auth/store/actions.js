import usersClient from '../api/auth'

export function userProfile ({ commit }, userId) {
  usersClient.find(userId)
    .then((response) => {
      let {
        firstName,
        lastName
      } = response.data
      console.log('userProfile')
      commit('PROFILE', { firstName, lastName })
    })
}

export const logUserIn = ({ commit, dispatch }, payload) => {
  commit('SET_LOADING', true)
  commit('CLEAR_ERROR')
  return usersClient.login(payload)
    .then(
      (user) => {
        let userData = user.data
        const loggedInUser = {
          accessToken: userData.session.access_token,
          isLoggedIn: true
        }
        const loggedInUserProfile = {
          user_id: userData.user_info.id,
          first_name: userData.user_info.first_name,
          last_name: userData.user_info.last_name,
          email: userData.user_info.email
        }
        const loggedInUserOAuth = {
          oauth: userData.oauth_clients
        }
        // console.log(userData)
        commit('SET_LOADING', false)
        commit('SET_USER_PROFILE', loggedInUserProfile)
        // commit('SET_USER_EDIT_PROFILE', userData.user_info)
        commit('SET_USER_AUTH', loggedInUser)
        commit('SET_USER_OAUTH', loggedInUserOAuth)
        if (userData.hasOwnProperty('companies')) {
          const defaultCompany = getUserDefaultCompany(userData.companies)
          commit('SET_DEFAULT_COMPANY', defaultCompany)
          commit('SET_LOADED_COMPANIES', userData.companies, { root: true })
        }
      }
    )
    .catch((error) => {
      console.log(error)
      let errorMessage = error.response.data
      commit('SET_ERROR', errorMessage)
      commit('SET_LOADING', false)
    })
}

export function logoutUser ({ commit }) {
  // TO DO call API URL to clear session from DB
  console.log('logout user')
  usersClient.logout()
    .then(resp => {
      commit('CLEAR_ALL_DATA')
      this.$router.push('/auth')
    })
    .catch((error) => {
      console.error(error)
      // let errorMessage = error.response.data
      commit('SET_ERROR', error)
      commit('SET_LOADING', false)
    })
}

export const setDefaultCompany = ({ commit }, payload) => {
  commit('SET_DEFAULT_COMPANY', payload)
}

function getUserDefaultCompany (companies) {
  const defaultcompany = companies.values().next().value
  return defaultcompany.id
}

export const resetAccessToken = ({ commit }, payload) => {
  commit('RESET_OAUTH_ACCESS_TOKEN', payload)
}

export const checkSession = ({ commit }) => {
  // check if session is valid
  usersClient.getUserInfo()
}

export const socialLogin = ({ commit }, payload) => {
  let userData = payload.data
  const loggedInUser = {
    accessToken: userData.session.access_token,
    isLoggedIn: true
  }
  const loggedInUserProfile = {
    user_id: userData.user_info.id,
    first_name: userData.user_info.first_name,
    last_name: userData.user_info.last_name,
    email: userData.user_info.email
  }
  const loggedInUserOAuth = {
    oauth: (userData.oauth_clients && userData.oauth_clients) || []
  }
  // console.log(userData)
  commit('SET_LOADING', false)
  commit('SET_USER_PROFILE', loggedInUserProfile)
  // commit('SET_USER_EDIT_PROFILE', userData.user_info)
  commit('SET_USER_AUTH', loggedInUser)
  commit('SET_USER_OAUTH', loggedInUserOAuth)
}
