import axios from 'axios';

export const API = axios.create({
    //baseURL: `https://jsonplaceholder.typicode.com/`
    baseURL: 'http://localhost:3000/parts/'
})