import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import TextBox from './components/TextBox.js';
import Table from './components/Table.js';
import TableData from './components/TableData.js';
import TableHead from './components/TableHead.js';
import TableRow from './components/TableRow.js';
import { connect } from 'react-redux';
import { getData } from './actions/SampleActions.js';

class App extends Component {
  render() {
    let tableContent = [];
    const {text, events, onButtonClick} = this.props;
    _.each(text, (value) => {
        tableContent.push(value.description);
    });
    console.log(tableContent);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button onClick={onButtonClick} name={"click me"}/>
        <Table><TableRow>{events}</TableRow></Table>
      </div>
    );
  }
}

function mapStateToProps(state) {  
    return { text: state.text, events: state.events }  
}  
 
function mapDispatchToProps(dispatch){  
    return {  
      onButtonClick:()=>dispatch(getData)
    }  
}  

var App1 = connect(mapStateToProps, mapDispatchToProps)(App) 

export default App1;
