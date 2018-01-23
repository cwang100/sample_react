
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import './index.css';
import App1 from './App';
import registerServiceWorker from './registerServiceWorker';
import {reducer} from './reducer/SampleReducer.js';
import React, { Component } from 'react';
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));
  
//渲染组件  
ReactDOM.render(  
    <Provider store={store}>  
        <App1 />  
    </Provider>,  
    document.getElementById('root')  
)  
registerServiceWorker();
