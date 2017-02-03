import React from 'react';
import {expect} from 'chai';
import {mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import {Provider} from 'react-redux';
import Link from 'react-router/lib/Link'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {SEARCH_PENDING, SEARCH_DONE, IDLE, LOADING, LOADED} from '../src/constants/SearchActionTypes';
import Smart from '../src/containers/Smart';
import {startBot, getNews} from '../src/actions/searchAction';
import NotFound from '../src/containers/NotFound';

describe('Containers', () => {
  describe('Smart container', function() {
    const middlewares = [thunk];
  	let mockStore = configureMockStore(middlewares);
  	let smartApp, app, store, initialItems_one, initialItems_two;
  	beforeEach(() => {
  		initialItems_one = {
        headlines: [],
        status: 'IDLE'
      };
      initialItems_two = {
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      }
  		let initialState = {
  			articles: initialItems_one,
        chat: initialItems_two
  		};
  		store = mockStore(initialState);
    });

    it('should exist and be valid', () => {
      const wrapper = shallow(
              <Provider store={store}>
                <Router history={browserHistory}>
                  <Route path="/" component={Smart} />
                  <Route path="*" component={NotFound} />
                </Router>
              </Provider>
            );
      expect(wrapper).to.exist;
    });

    it('should have render method', () => {
      expect(Smart.prototype.render).to.exist;
    });
  });
});
