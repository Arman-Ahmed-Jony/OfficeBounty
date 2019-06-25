export const auth = (state) => {
  return state.auth
}

export const oauthclients = (state) => {
  return state.oauthclients.oauth
}

export const isAuthenticated = (state) => {
  return state.auth.accessToken
}

export const user = (state) => {
  return state.user
}
