// api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7012/api/', // Replace this with your API base URL
  headers: {
    'Content-Type': 'application/json'
    // You can add more headers here if needed
  }
});

export default apiClient;
