import axios from 'axios';

const api = axios.get({
  baseURL: 'https://api.timbu.cloud', 
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ac7be4f818194204a54ec5a48d3bc2b420240716220027780128`,
    'Content-Type': 'application/json'
  }
});

export default api;
