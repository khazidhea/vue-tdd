import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

export default {
  async getPeople (context, payload) {
    let response = await axios.get('users')
    return response.data
  }
}
