import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM THIS INSTANCE WILL OVERRIDE GLOBAL CONFIG - headers.common'

export default instance