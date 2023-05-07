// userAPI.jsx

import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

const BASE_URL = 'http://localhost:3001';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const performLogin = async (username, password) => {
  try {
    const response = await axiosInstance.post('/login', { username, password }, { credentials: 'include' });
    console.log('userAPI.jsx --- RESPONSE: ', response);
    const { userId, token } = response.data;
    console.log('userAPI.jsx --- RESPONSE.DATA: ', response.data);
    localStorage.setItem('token', token); // Token im Localstorage speichern
    const user = { userId, token };
    console.log('userAPI.jsx --- userId & TOKEN: ', userId, token);
    console.log('userAPI.jsx --- RESPONSE.DATA.MESSAGE: ', response.data.message);
    const errMsg = response.data.message;
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const performLogout = async () => {
  try {
    await axiosInstance.post('/logout');
    localStorage.removeItem('token');
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const getUser = async () => {
  const token = localStorage.getItem('token');
  console.log('userAPI.jsx --- getUser TOKEN: ', token);
  const response = await axiosInstance.get(`${BASE_URL}/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const getUsers = async () => {
  const response = await axiosInstance.get(`${BASE_URL}/api/users`);
  return response.data;
};

export { performLogin, performLogout };
