import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:8080`,
  withCredentials: false,
  headers: {
    Accpet: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
