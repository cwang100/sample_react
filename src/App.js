import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import Section from './components/Section.js';
import Container from './components/Container.js';
import DetailModal from './components/DetailModal.js';
import Header from './components/Header.js';
import Select from './components/Select.js';
import SideBar from './components/SideBar.js';
import Table from './components/Table.js';
import TableData from './components/TableData.js';
import TableHead from './components/TableHead.js';
import TableRow from './components/TableRow.js';
import TextBox from './components/TextBox.js';
import Modal from './components/Modal.js';
import { connect } from 'react-redux';
import { getEvents, getEventDetailData } from './actions/SampleActions.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, displayEventDetails: <TextBox/> };
  }

  toggleModal = (id) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    let details = this.props.events[id];
    if (!details)
      return;
    let contract_group_id = details.primary_contract_group_id;
    let contract_group = this.props.contract_groups[contract_group_id];
    console.log(contract_group)
    let contracts = [];
    _.each(contract_group.contracts, (contract_id) => {
      contracts.push(this.props.contracts[contract_id]);
    });

    this.setState({
      displayEventDetails: <DetailModal details={details} contracts={contracts} contract_group={contract_group} />
    });
  }

  componentWillMount() {
    this.props.onButtonClick('horse-racing');
  }

  render() {
    let tableContent = [];
    const {events} = this.props;
    _.each(events, (value) => {
      let eventID = <TableData>{value.id}</TableData>;
      let eventType = <TableData>{value.event_type}</TableData>;
      let eventName = <TableData>{value.name}</TableData>;
      let eventDetail = <TableData><Button onClick={() => this.toggleModal(value.id)} name={"View Details"} id={value.id}/></TableData>;

      tableContent.push(<TableRow key={value.id}>{eventID}{eventType}{eventName}{eventDetail}</TableRow>);
    });

    let options = [
      {value: "horse-racing", name: "Horse Racing"},
      {value: "football", name: "Football"},
      {value: "tennis", name: "Tennis"},
      {value: "american-football", name: "American Football"},
      {value: "basketball", name: "Basketball"},
      {value: "boxing", name: "Boxing"},
      {value: "cricket", name: "Cricket"},
      {value: "golf", name: "Golf"},
      {value: "ice-hockey", name: "Ice Hockey"},
      {value: "snooker", name: "Snooker"},
      {value: "volleyball", name: "Volleyball"}
    ]

    return (
      <Section id="container">
        <Header/>

        <SideBar/>
    <Section id="main-content">
      <Section class="wrapper">
        <p>if the table is not diplaying, please install Chrome plugin</p>
        <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">allow-control-allow-origin</a>
        <Container>
          <Select options={options} onChange={this.props.onButtonClick}/>
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
      </Section>
    </Section>
  </Section>
    );
  }
}

const mapStateToProps = (state) => {  
  return { events: state.events, contract_groups: state.contract_groups, contracts: state.contracts  }  
}  
 
const mapDispatchToProps = {  
  onButtonClick: getEvents,
  displayModal: getEventDetailData
}  

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App) 

export default ConnectedApp;
