import { createStore, applyMiddleware, compose } from 'redux';
<<<<<<< HEAD
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
=======
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
>>>>>>> dda84c5e72caf0ed43fabb18890f0ec2c9493e55

const persistedState =
      (
        localStorage.getItem('persistState') ? JSON.parse(localStorage.getItem('persistState')) : {}
      )
      
let configureStore = () => {
  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export default configureStore;
