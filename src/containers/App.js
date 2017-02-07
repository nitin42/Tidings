import React from 'react';
import { Provider } from 'react-redux';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory';

import configureStore from '../store/configureStore';
import Smart from './Smart';
import NotFound from './NotFound';

const store = configureStore();

store.subscribe(()=>{
  localStorage.setItem('persistState', JSON.stringify(store.getState()))
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Smart} />
            <Route path="*" component={NotFound} />
          </Router>
        </Provider>
      </div>
    );
  }
}
