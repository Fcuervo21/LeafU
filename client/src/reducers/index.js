import { combineReducers } from 'redux';

import news from './news';
import calculator from './calculator';

export default combineReducers({ news, calculator });