import axios from 'axios';

const baseAxiosURL = 'https://api.github.com/users';

const client = axios.create({
    baseURL: baseAxiosURL,
});

export default client;