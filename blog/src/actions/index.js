import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts', {})
    console.log('response =', response);
    //Manually dispatch the Action
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data,
    });
}