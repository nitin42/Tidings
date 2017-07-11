import { combineReducers } from 'redux';
<<<<<<< HEAD

=======
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55
import searchReducer from './search';
import botReducer from './bot';

const rootReducer = combineReducers({
  articles: searchReducer,
  chat: botReducer
});

export default rootReducer;
