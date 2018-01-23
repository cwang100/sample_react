import React from 'react';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SampleReducer from './reducer/SampleReducer.js';

let store = createStore(SampleReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
