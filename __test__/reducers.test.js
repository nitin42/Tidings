import {expect} from 'chai';

import searchReducer from '../src/reducers/search';
import botReducer from '../src/reducers/bot';

import data from '../src/components/utility';

const botMsg = "Here is your sports news for today!";
const intentName = "Sports news";
const query = "Sports news";
const source = "agent";

describe('Reducers', () => {
  describe('searchReducer', () => {
    it('should be a function', () => {
      expect(searchReducer).to.be.a('function');
    });

    it('should work with action SEARCH_PENDING', () => {
      let initialState = {headlines:[], status: 'IDLE', caller: ''};
      let newState = searchReducer(initialState, {type: 'SEARCH_PENDING', api_source: 'bbc'});
      expect(newState).to.eql({
        headlines: [],
        status: 'PENDING',
        caller: 'bbc'
      });
    });

    it('should work with action IDLE', () => {
      let initialState = {headlines:[], status: 'IDLE', caller: ''};
      let newState = searchReducer(initialState, {type: 'IDLE'});
      expect(newState).to.eql({
        headlines: [],
        status: 'IDLE',
        caller: ''
      });
    });

    it('should work with action SEARCH_DONE', () => {
      let initialState = {headlines:[], status: 'IDLE', caller: ''};
      let newState = searchReducer(initialState, {type: 'SEARCH_DONE', heads: data, api_source: 'bbc'});
      expect(newState).to.eql({
        headlines: data,
        status: 'DONE',
        caller: 'bbc'
      });
    });

    it('should not change the state with unknown action', () => {
      let initialState = {headlines:[], status: 'IDLE', caller: ''};
      let newState = searchReducer(initialState, {type: ''});
      expect(newState).to.eql({
        headlines: [],
        status: 'IDLE',
        caller: ''
      });
    });

    it('should not change the state when no action is defined', () => {
      let initialState = {headlines:[], status: 'IDLE', caller: ''};
      let newState = searchReducer(initialState, {});
      expect(newState).to.eql({
        headlines: [],
        status: 'IDLE',
        caller: ''
      });
    });

    it('should work with action type SEARCH_PENDING when no initial state is defined', () => {
      let newState = searchReducer({}, {type: 'SEARCH_PENDING', api_source: 'bbc'});
      expect(newState).to.eql({
        headlines: [],
        status: 'PENDING',
        caller: 'bbc'
      });
    });

    it('should work with action type IDLE when no initial state is defined', () => {
      let newState = searchReducer({}, {type: 'IDLE'});
      expect(newState).to.eql({});
    });

    it('should work with action type SEARCH_DONE when no initial state is defined', () => {
      let newState = searchReducer({}, {type: 'SEARCH_DONE', heads: data, api_source: 'bbc'});
      expect(newState).to.eql({
        headlines: data,
        status: 'DONE',
        caller: 'bbc'
      });
    });
  });

  describe('botReducer', () => {
    it('should be a function', () => {
      expect(botReducer).to.be.a('function');
    });

    it('should work with action LOADING', () => {
      let initialState = {
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      };
      let newState = botReducer(initialState, {type: 'LOADING'});
      expect(newState).to.eql({
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: true,
        show: false,
        picture: true,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
      });
    });

    it('should work with action LOADED', () => {
      let initialState = {
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      };
      let newState = botReducer(initialState, { type: 'LOADED', msg: botMsg, intent: intentName,
      qry: query, src: source });
      expect(newState).to.eql({
        botMsg: botMsg,
        intentName: intentName,
        query: query,
        source: source,
        loader: false,
        show: true,
        initMsg: '',
        picture: false
      });
    });

    it('should not change the state with unknown action', () => {
      let initialState = {
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      };
      let newState = botReducer(initialState, { type: ''});
      expect(newState).to.eql({
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      });
    });

    it('should not change the state when no action is defined', () => {
      let initialState = {
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      };
      let newState = botReducer(initialState, {});
      expect(newState).to.eql({
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: false,
        show: false,
        initMsg: "Welcome to Tidings. A NLP based news application powered by API.ai. You can start by typing 'recent news' ",
        picture: true
      });
    });

    it('should work when initial state is not defined with action type LOADING', () => {
      let newState = botReducer({}, { type: 'LOADING'});
      expect(newState).to.eql({
        botMsg: '',
        intentName: '',
        query: '',
        source: '',
        loader: true,
        show: false,
      });
    });

    it('should work when initial state is not defined with action type LOADED', () => {
      let newState = botReducer({}, { type: 'LOADED', msg: botMsg, intent: intentName,
      qry: query, src: source });
      expect(newState).to.eql({
        botMsg: botMsg,
        intentName: intentName,
        query: query,
        source: source,
        loader: false,
        show: true,
        initMsg: '',
        picture: false
      });
    });
  });
});
