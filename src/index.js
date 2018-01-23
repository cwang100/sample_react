
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {reducer} from './reducer/SampleReducer.js';
import {getData} from './actions/SampleActions.js';
import React, { Component } from 'react';
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));

function mapStateToProps(state) {  
    return { text: state.text }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return {  
        onButtonClick:()=>dispatch(getData)
    }  
}  
  
//连接组件  
var App1 = connect(mapStateToProps, mapDispatchToProps)(App)  
  
//渲染组件  
ReactDOM.render(  
    <Provider store={store}>  
        <App1 />  
    </Provider>,  
    document.getElementById('root')  
)  
registerServiceWorker();
