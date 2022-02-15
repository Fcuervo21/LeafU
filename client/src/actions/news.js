import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api';

//Action creators
export const getNews = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNews();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message)
        
    }
};