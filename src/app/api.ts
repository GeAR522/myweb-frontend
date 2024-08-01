import axios from 'axios';
import { ACCESS_TOKEN } from './constants/constants';

export const api = axios.create({
  baseURL: process.env.NEXT_API_URL,
})

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
},
  (error) => {
    return Promise.reject(error)
  })
