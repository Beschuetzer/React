import _ from "lodash";
import { 
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
 } from "../actions/types";

export const streamsReducer = (streams = {}, action) => {
  switch(action.type) {
    case CREATE_STREAM:
      return { ...streams, [action.payload.id]: action.payload};
    case FETCH_STREAM:
      return { ...streams, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return { ...streams, [action.payload.id]: action.payload};
    case FETCH_STREAMS:
      return { ...streams, ..._.mapKeys(action.payload, 'id')};
      //without lodash
      // const streamsCopy = { ...streams };
      // action.payload.forEach(stream => {
      //   streamsCopy[stream.id] = stream;
      // })
      // return streamsCopy;
    case DELETE_STREAM:
      return _.omit(streams, action.payload);
      //without lodash:
      // const streamCopy = { ...streams };
      // delete streamCopy[action.payload];
      // return streamCopy;
    default:
      return streams;
  }
}