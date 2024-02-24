import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `https://gamma.dgnetrix.com/api-universal`,
});

axiosInstance.defaults.timeout = 20000;
