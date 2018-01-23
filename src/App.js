import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import TextBox from './components/TextBox.js';
import { connect } from 'react-redux';
import {getData} from './actions/SampleActions.js';

class App extends Component {
  render() {
    const {text, onButtonClick} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button onClick={onButtonClick} name={"click me"}/>

        <TextBox>{JSON.stringify(text)}</TextBox>
      </div>
    );
  }
}

function mapStateToProps(state) {  
    return { text: state.text }  
}  
 
function mapDispatchToProps(dispatch){  
    return {  
      onButtonClick:()=>dispatch(getData)
    }  
}  

var App1 = connect(mapStateToProps, mapDispatchToProps)(App) 

export default App1;
