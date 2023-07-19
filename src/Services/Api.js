import axios from 'axios';

const BASE_URL = 'https://chat-bot-challenge-api.vercel.app';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
});

export default api;
