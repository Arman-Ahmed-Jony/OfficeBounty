import projectsClient from '../api/projects'

export const loadProjects = ({ commit }) => {
  commit('SET_LOADING', true)
  projectsClient.list()
    .then((response) => {
      const projects = response.data.data
      commit('SET_LOADED_PROJECTS', projects)
      commit('SET_LOADING', false)
    })
    .catch((error) => {
      let errorMessage = error.response.data
      commit('SET_ERROR', errorMessage)
    })
}

export const createProject = ({ dispatch, commit }, payload) => {
  commit('SET_LOADING', true)
  commit('CLEAR_ERROR')
  return projectsClient.create(payload)
    .then((response) => {
      let project = response.data
      commit('CREATE_PROJECT', project)
      commit('SET_LOADING', false)
    })
    .catch((error) => {
      let errorMessage = error.response.data
      commit('SET_ERROR', errorMessage)
    })
}

export const loadProjectDetails = ({ commit }, payload) => {
  commit('SET_LOADING', true)
  return projectsClient.details(payload)
    .then((response) => {
      commit('SET_PROJECT_DETAILS', response.data)
      commit('SET_LOADING', false)
    })
    .catch((error) => {
      let errorMessage = error.response.data
      commit('SET_ERROR', errorMessage)
    })
}

export const handleUpdate = ({ commit, dispatch }, payload) => {
  commit('SET_LOADING', true)
  return projectsClient.update(payload)
    .then((response) => {
      dispatch('loadProjects')
      commit('SET_LOADING', false)
    })
    .catch((error) => {
      let errorMessage = error.response.data
      commit('SET_ERROR', errorMessage)
    })
}
