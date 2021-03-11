
import {combineReducers} from "redux";
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    //reducer names and desired keys go here
    //e.g songs: selectedSongReducer,
    posts: postsReducer,
    users: usersReducer,
})

    
