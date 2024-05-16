import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `https://gamma.dgnetrix.com/api-bujo/journal`,
});

axiosInstance.defaults.timeout = 20000;
