import client from '../../Clients'
const RESOURCE_NAME = 'example'

export default {
  create (payload) {
    return client.post(`${RESOURCE_NAME}`, payload)
  },

  list () {
    return client.get(`${RESOURCE_NAME}`)
  },

  update (payload) {
    return client.post(`${RESOURCE_NAME}/${payload.id}`, payload)
  },

  del (id) {
    return client.delete(`${RESOURCE_NAME}/${id}`)
  },

  details (id) {
    return client.get(`${RESOURCE_NAME}/${id}`)
  }
}
