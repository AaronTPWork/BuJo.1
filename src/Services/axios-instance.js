import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const axiosInstanceBase = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});


axiosInstance.defaults.timeout = 20000;
