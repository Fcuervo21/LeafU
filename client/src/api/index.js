import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchNews = () => API.get('/news');

//Calculator
export const getCalculator = () => API.get('/calculator');
export const createCalculatorPost = (newCalculatorEntry) => API.post('/calculator', newCalculatorEntry);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);