import axios from 'axios';

// Create an instance of axios with a custom config
export const client = axios.create({
  baseURL: 'https://api.sampleapis.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor
client.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    // Handle unauthorized access
    // e.g., redirect to login page
  }
  return Promise.reject(error);
});

