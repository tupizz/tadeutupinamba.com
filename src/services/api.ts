import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gitconnected.com',
});

export default api;
