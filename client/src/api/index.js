import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
// const url = 'http://localhost:5000/news';

export const fetchNews = () => API.get('/news');

//Calculator
export const getCalculator = () => API.get('/calculator');
export const createCalculatorPost = (newCalculatorEntry) => API.post('/calculator', newCalculatorEntry);