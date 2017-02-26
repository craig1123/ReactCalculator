import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Calculator from './components/Calculator';
import './App.css';

localStorage.debug = null;
const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2 style={{ textAlign: 'center' }}>
        Please use Craig's Calculator
      </h2>
      <Calculator />
    </div>
  </Provider>,
  document.getElementById('root')
);
