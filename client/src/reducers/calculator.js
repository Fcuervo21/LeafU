import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (calculator = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            break;
        case CREATE:
            return [...calculator, action.payload];
        default:
            return calculator;
    }
};