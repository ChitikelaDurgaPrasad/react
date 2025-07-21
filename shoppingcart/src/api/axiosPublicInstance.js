import axios from "axios";

export const publicApi = axios.create({
    baseURL : 'https://dummyjson.com',
    // timeout : 5000
});