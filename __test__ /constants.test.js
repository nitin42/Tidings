import {expect} from 'chai';

import {SEARCH_PENDING, SEARCH_DONE, IDLE, LOADING, LOADED} from '../src/constants/SearchActionTypes';

describe('Constants defined for action types', () => {
  it('all should exist and be a string', () => {
    expect(SEARCH_PENDING).to.exist;
    expect(SEARCH_PENDING).to.be.a('string');
    expect(SEARCH_DONE).to.exist;
    expect(SEARCH_DONE).to.be.a('string');
    expect(IDLE).to.exist;
    expect(IDLE).to.be.a('string');
    expect(LOADING).to.exist;
    expect(LOADING).to.be.a('string');
    expect(LOADED).to.exist;
    expect(LOADED).to.be.a('string');
  });
});
