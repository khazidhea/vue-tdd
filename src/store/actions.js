import axios from 'axios'

export default {
  async getPeople (context, payload) {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
}
