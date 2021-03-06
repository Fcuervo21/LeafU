import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

export default (news = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            break;
        default:
            return news;
    }
};