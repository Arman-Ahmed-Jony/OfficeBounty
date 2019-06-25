import client from '../../Clients'
// const RESOURCE = 'users'
export default {
  all () {
    return client.get('/users')
  },
  find (userId) {
    return client.get(`/users/${userId}`)
  },
  update (userId, data) {
    return client.put(`/users/${userId}`, data)
  },
  login (params) {
    return client.post('login', params)
  },
  getUserInfo () {
    return client.get('whoami')
  },
  logout () {
    return client.get('logout')
  }
}
