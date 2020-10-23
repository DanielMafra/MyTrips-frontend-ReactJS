import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR_HOST:YOUR_PORT' //Example: http://localhost:3333
});

export default api;