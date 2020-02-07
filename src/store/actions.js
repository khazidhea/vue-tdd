import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

export default {
  async getPeople ({ commit }, payload) {
    let response = await axios.get('users')
    commit('SET_PEOPLE', response.data)
  }
}
