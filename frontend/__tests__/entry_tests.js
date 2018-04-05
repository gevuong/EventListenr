import ReactDOM from 'react-dom';
import configureStore from '../store/store';

jest.mock('../store/store', () =>
    jest.fn(() => (
        { storeKey: 'storeValue' }
    ))
);

describe('entry', () => {
  let Entry, ReactDOM, Root;

  beforeAll(() => {
    document.addEventListener = jest.fn();
    document.getElementById = jest.fn(id => id);

    ReactDOM = require('react-dom');
    ReactDOM.render = jest.fn();

    Root = require('../components/root');
    Entry = require('../event_listenr');

    // invoke the callback passed to document.addEventListener
    document.addEventListener.mock.calls[0][1]();
  });

  it('invokes the configureStore function', () => {
    expect(configureStore).toBeCalled();
  });

  // Add more tests here!

});
