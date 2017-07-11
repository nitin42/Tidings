<<<<<<< HEAD
import { LOADING, LOADED } from '../constants/SearchActionTypes';
=======
import {LOADING, LOADED} from '../constants/SearchActionTypes';
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55

let initialState = {
  initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
  botMsg: '',
  intentName: '',
  query: '',
  source: '',
  loader: false,
  show: false,
  picture: true
};

let botReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        loader: true,
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        show: false,
      };
    case LOADED:
      return {
        ...state,
        loader: false,
        botMsg: action.msg,
        intentName: action.intent,
        query: action.qry,
        source: action.src,
        show: true,
        initMsg: '',
        picture: false
      };
    default: return state;
  }
}

export default botReducer;
