import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import MaterialTheme from './MaterialTheme';


localStorage.debug = null;
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <MaterialTheme />
  </Provider>,
  document.getElementById('root')
);
