import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //whenever calling an action creator inside of another action creator, you have to dispatch the result of the called action creator:
    await dispatch(fetchPosts());
    const posts = getState().posts;
    _.chain(posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts', {})

    //Manually dispatch the Action
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data,
    });
}

export const fetchUser = (userId) => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`, {})
    dispatch({
        type: "FETCH_USER",
        payload: response.data,
        userId,
    });
}




//memoized solution (but can only call fetchUser on time per user;  problem if user data changes)
// export const fetchUser = (userId) => dispatch => {
//     _fetchUser(userId, dispatch);
// }

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`users/${userId}`);
//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data,
//         userId,
//     });
// })