import axios from 'axios'

const baseURL = 'https://data.jsdelivr.com/v1/'

export const instanceApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
