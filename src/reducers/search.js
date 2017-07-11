<<<<<<< HEAD
import { SEARCH_PENDING, SEARCH_DONE, IDLE, NO_MORE } from '../constants/SearchActionTypes';
=======
import {SEARCH_PENDING, SEARCH_DONE, IDLE, NO_MORE} from '../constants/SearchActionTypes';
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55

let initialState = {
  headlines: [],
  status: 'IDLE',
  caller: '',
};

let searchReducer = (state=initialState, action) => {
  switch(action.type) {
    case SEARCH_PENDING:
      return {...state, headlines: [], status: 'PENDING', caller: action.api_source};
    case SEARCH_DONE:
      return {...state, headlines: action.heads, status: 'DONE', caller: action.api_source};
    case IDLE:
      return {...state};
    default: return state;
  }
}

export default searchReducer;
