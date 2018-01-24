import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import Container from './components/Container.js';
import Table from './components/Table.js';
import TableData from './components/TableData.js';
import TableHead from './components/TableHead.js';
import TableRow from './components/TableRow.js';
import TextBox from './components/TextBox.js';
import Modal from './components/Modal.js';
import { connect } from 'react-redux';
import { getData } from './actions/SampleActions.js';
import { getEventData } from './actions/SampleActions.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, displayEventDetails: <TextBox/> };
  }

  buildModal = (id) => {
    let Details = this.props.text[id];
    if (!Details)
      return <TextBox/>

    let StartTime = <TableRow><TableData>Start Time</TableData><TableData>{Details.start_datetime}</TableData></TableRow>;
    let Description = <TableRow><TableData>Event Description</TableData><TableData>{Details.description}</TableData></TableRow>;
    let ContactID = <TableRow><TableData>Contact Group ID</TableData><TableData>{Details.primary_contract_group_id}</TableData></TableRow>;
    return <TextBox><Table>{StartTime}{Description}{ContactID}</Table></TextBox>

  }

  toggleModal = (id) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    let Modal = this.buildModal(id);
    this.setState({
      displayEventDetails: Modal //Todo: change it to more comprehensive event details
    });
    console.log(this.props.text[id])
  }

  render() {
    let tableContent = [];
    const {text, eventDetails, onButtonClick, DisplayModal} = this.props;
    console.log(this.props)
    _.each(text, (value) => {
      let EventID = <TableData>{value.id}</TableData>;
      let EventType = <TableData>{value.event_type}</TableData>;
      let EventName = <TableData>{value.name}</TableData>;
      //let EventDetail = <TableData><Button onClick={DisplayModal} name={"View Details"} id={value.id}/></TableData>;
      let EventDetail = <TableData><Button onClick={() => this.toggleModal(value.id)} name={"View Details"} id={value.id}/></TableData>;

      tableContent.push(<TableRow key={value.id}>{EventID}{EventType}{EventName}{EventDetail}</TableRow>);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <Button onClick={onButtonClick} name={"Show All Events"} size="L"/>
        </Container>
        <Container>
          <Table>
            <TableRow>
              <TableHead>Event ID</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead></TableHead>
            </TableRow>
            {tableContent}
          </Table>
        </Container>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          {this.state.displayEventDetails}
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {  
    return { text: state.text, eventDetails: state.eventDetails }  
}  
 
function mapDispatchToProps(dispatch){  
    return {  
      onButtonClick:()=>dispatch(getData),
      DisplayModal:()=>dispatch(getEventData)
    }  
}  

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App) 

export default ConnectedApp;
