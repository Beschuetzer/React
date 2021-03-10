import { act } from "react-dom/test-utils";

const postsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}

export default postsReducer;