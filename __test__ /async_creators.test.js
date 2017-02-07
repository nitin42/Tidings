import {expect} from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {startBot, getNews, searchNews, botStarter} from '../src/actions/searchAction';

import {universal, connect_apiai} from '../src/api/news';

import {business_insider} from '../src/components/utility';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let initialItems_one = {
  headlines: [],
  status: 'IDLE',
  caller: ''
};

let initialItems_two = {
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

describe('Async creators', () => {
  it('startBot should exist and returns a function', () => {
    expect(startBot).to.exist;
    expect(startBot).to.be.a('function');
  });

  it('startBot should return an action type "LOADING" when a term is passed', () => {
    const store = mockStore(initialState);

    store.dispatch(startBot('Hello'));

    const actions = new Promise((resolve, reject) => {
      resolve(store.getActions());
    });

    actions.then((res) => {
      expect(res[0]["type"]).to.equal('LOADING');
    });
  });

  it('startBot should return an action type "IDLE" when no term is passed', () => {
    const store = mockStore(initialState);

    store.dispatch(startBot(''));

    const actions = new Promise((resolve, reject) => {
      resolve(store.getActions());
    });

    actions.then((res) => {
      expect(res[0]["type"]).to.equal('IDLE');
    });
  });

  it('getNews should exist and returns a function', () => {
    expect(getNews).to.exist;
    expect(getNews).to.be.a('function');
  });

  it('getNews should return an action type "SEARCH_PENDING" when a source is passed', () => {
    const store = mockStore(initialState);

    store.dispatch(getNews(business_insider));

    const actions = new Promise((resolve, reject) => {
      resolve(store.getActions());
    });

    actions.then((res) => {
      expect(res[0]["type"]).to.equal('SEARCH_PENDING');
    });
  });

  it('getNews should return an action type "IDLE" when no source is passed', () => {
    const store = mockStore(initialState);

    store.dispatch(getNews(''));

    const actions = new Promise((resolve, reject) => {
      resolve(store.getActions());
    });

    actions.then((res) => {
      expect(res[0]["type"]).to.equal('IDLE');
    });
  });
});
