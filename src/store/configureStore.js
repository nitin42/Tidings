import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

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
