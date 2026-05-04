/**
 * API Service Placeholder (Scope for Future Backend Integration)
 * 
 * Once a backend is implemented, you would install axios (`npm install axios`)
 * and uncomment the code below to enable robust API calls, global error handling,
 * and automatic CORS/Auth token injection.
 */

/*
import axios from 'axios';

// 1. Create a configured Axios instance
const apiClient = axios.create({
  // Uses the environment variable you define in .env
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// 2. Request Interceptor (e.g., attach auth tokens if users ever need to log in)
apiClient.interceptors.request.use((config) => {
  // const token = localStorage.getItem('auth_token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 3. Response Interceptor (e.g., globally handle 401s or network errors)
apiClient.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  console.error("API Error:", error.response?.data?.message || error.message);
  return Promise.reject(error);
});

// 4. Export Service Methods that components can call easily
export const api = {
  // Example: Submitting the contact form to the backend
  submitContact: async (formData) => {
    return await apiClient.post('/contact', formData);
  },
  
  // Example: Fetching available properties
  getProperties: async (filters) => {
    return await apiClient.get('/properties', { params: filters });
  }
};

export default api;
*/

// Temporary mock export so the file is valid until you install axios
export const apiClient = {
  get: async (url) => {
    console.log(`[Mock API GET] ${url}`);
    return Promise.resolve({ data: [] });
  },
  post: async (url, data) => {
    console.log(`[Mock API POST] ${url}`, data);
    return Promise.resolve({ success: true });
  }
};
