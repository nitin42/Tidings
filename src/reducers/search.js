import {SEARCH_PENDING, SEARCH_DONE, IDLE, NO_MORE} from '../constants/SearchActionTypes';

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
