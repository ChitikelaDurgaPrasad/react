import axios from "axios";

export const privateApi = axios.create({
    baseURL : 'https://dummyjson.com',
    // timeout : 5000
});

privateApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// privateApi.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.error('API Error:', error.response || error.message);
//         return Promise.reject(error);
//     }
// )