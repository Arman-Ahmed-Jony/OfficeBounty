import client from '../../Clients'

export default {
  register (params) {
    return client.post('register', params)
  }
}
