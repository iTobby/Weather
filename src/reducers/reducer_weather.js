import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); YES - CONCAT creates a new list
      //return state.push([action.payload.data]); NO - PUSH modifies existing list (state)
      //DO NOT modify state
      return [ action.payload.data, ...state ]
  }
  return state;
}
