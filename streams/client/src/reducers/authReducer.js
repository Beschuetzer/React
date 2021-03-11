import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
}

const authReducer = (authObj = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {...authObj, isSignedIn: true, userId: action.payload};
    case SIGN_OUT:
      return {...authObj, isSignedIn: false, userId: null};
    default:
      return authObj;
  }
}
export default authReducer;
