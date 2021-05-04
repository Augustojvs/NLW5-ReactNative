import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.123:3333',
});
// json-server ./src/services/server.json --host 10.0.0.123 --port 3333
export default api;