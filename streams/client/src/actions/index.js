import { 
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
 } from "./types";
import streams from '../apis/streams';
import history from '../history';

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  try {
    const response = await streams.post('/streams/', {...formValues, userId});
    
    dispatch({
      type: CREATE_STREAM,
      payload: { ...response.data, userId},
    })
    
    history.push('/');
  } catch (error) {
    console.log('error creating stream------------------------------------------------');
    console.log('error =', error);
  }
}

export const fetchStreams = () => async (dispatch, getState) => {
  const response = await streams.get('/streams/');
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  })
}

export const fetchStream = (id) => async (dispatch, getState) => {
  console.log('fetchin------------------------------------------------');
  const response = await streams.get(`streams/${id}`);

  dispatch({
    type: FETCH_STREAM, 
    payload: response.data
  });
}

export  const editStream = (id, newValues) => async (dispatch, getState) => {
  try {
    const response = await streams.patch(`streams/${id}`, newValues);

    dispatch({type: EDIT_STREAM, payload: response.data});
    history.push('/');
  } catch (err) {
    console.log('error edit stream------------------------------------------------');
    console.log('err =', err);
  }
}

export const deleteStream = id => async (dispatch, getState) => {
  await streams.delete(`streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  })
}

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  } 
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}


    
