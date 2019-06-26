export const SET_LOADED_PROJECTS = (state, payload) => {
  state.loadedProjects = payload
}

export const CREATE_PROJECT = (state, payload) => {
  state.loadedProjects = [...state.loadedProjects, payload]
}

export const SET_PROJECT_DETAILS = (state, payload) => {
  state.projectDetails = payload
}
