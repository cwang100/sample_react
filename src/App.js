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
import Modal from './components/Modal.js';
import { connect } from 'react-redux';
import { getData } from './actions/SampleActions.js';
import { getEventData } from './actions/SampleActions.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, displayEventDetails: {} };
  }

  toggleModal = (id) => {
    console.log(id)
    this.setState({
      isOpen: !this.state.isOpen
    });

    if (id > 0 ) {
    this.setState({
      displayEventDetails: this.props.text[id]['full_slug'] //Todo: change it to more comprehensive event details
    });
      console.log(this.props.text[id]['full_slug'])
    }
  }

  render() {
    let tableContent = [];
    const {text, events, onButtonClick, DisplayModal} = this.props;
    _.each(text, (value) => {
      //console.log(value);
      let EventID = <TableData>{value.id}</TableData>;
      let EventType = <TableData>{value.event_type}</TableData>;
      let EventDesc = <TableData>{value.description}</TableData>;
      //let EventDetail = <TableData><Button onClick={DisplayModal} name={"View Details"} id={value.id}/></TableData>;
      let EventDetail = <TableData><Button onClick={() => this.toggleModal(value.id)} name={"View Details"} id={value.id}/></TableData>;

      tableContent.push(<TableRow key={value.id}>{EventID}{EventType}{EventDesc}{EventDetail}</TableRow>);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button onClick={onButtonClick} name={"Show All Events"} size="L"/>
        <Table>
          <TableRow>
            <TableHead>Event ID</TableHead>
            <TableHead>Event Type</TableHead>
            <TableHead>Event Description</TableHead>
            <TableHead></TableHead>
          </TableRow>
          {tableContent}
        </Table>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          {this.state.displayEventDetails}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {  
    return { text: state.text, events: state.events }  
}  
 
function mapDispatchToProps(dispatch){  
    return {  
      onButtonClick:()=>dispatch(getData),
      DisplayModal:()=>dispatch(getEventData)
    }  
}  

var App1 = connect(mapStateToProps, mapDispatchToProps)(App) 

export default App1;
