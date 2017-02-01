import { combineReducers } from 'redux';
import searchReducer from './search';
import botReducer from './bot';

const rootReducer = combineReducers({
  articles: searchReducer,
  chat: botReducer
});

export default rootReducer;
