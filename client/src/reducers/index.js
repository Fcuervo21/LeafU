import { combineReducers } from 'redux';

import news from './news';
import calculator from './calculator';
import auth from './auth';

export default combineReducers({ news, calculator, auth });