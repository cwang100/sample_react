import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import Container from './components/Container.js';
import DetailModal from './components/DetailModal.js';
import Table from './components/Table.js';
import TableData from './components/TableData.js';
import TableHead from './components/TableHead.js';
import TableRow from './components/TableRow.js';
import TextBox from './components/TextBox.js';
import Modal from './components/Modal.js';
import Select from './components/Select.js';
import Option from './components/Option.js';
import { connect } from 'react-redux';
import { getData } from './actions/SampleActions.js';
import { getEventData } from './actions/SampleActions.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, displayEventDetails: <TextBox/> };
  }

  toggleModal = (id) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    let details = this.props.text[id];
    this.setState({
      displayEventDetails: <DetailModal details={details}/> //Todo: change it to more comprehensive event details
    });
  }

  render() {
    let tableContent = [];
    const {text, eventDetails, onButtonClick, displayModal} = this.props;
    _.each(text, (value) => {
      let eventID = <TableData>{value.id}</TableData>;
      let eventType = <TableData>{value.event_type}</TableData>;
      let eventName = <TableData>{value.name}</TableData>;
      let eventDetail = <TableData><Button onClick={() => this.toggleModal(value.id)} name={"View Details"} id={value.id}/></TableData>;

      tableContent.push(<TableRow key={value.id}>{eventID}{eventType}{eventName}{eventDetail}</TableRow>);
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>if the table is not diplaying, please install Chrome plugin</p>
        <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">allow-control-allow-origin</a>
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

        <Modal 
          show={this.state.isOpen}
          onClose={this.toggleModal}
        >
          {this.state.displayEventDetails}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {  
    return { text: state.text, eventDetails: state.eventDetails }  
}  
 
const mapDispatchToProps = (dispatch, ownProps) =>{  
    return {  
      onButtonClick:()=>dispatch(getData),
      displayModal:()=>dispatch(getEventData)
    }  
}  

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App) 

export default ConnectedApp;
