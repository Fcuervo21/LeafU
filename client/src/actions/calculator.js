import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createCalculatorPost = (newCalculatorEntry) => async (dispatch) =>{
    try {
        const { data } = await api.createCalculatorPost(newCalculatorEntry);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}