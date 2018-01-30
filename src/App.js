import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button.js';
import Section from './components/Section.js';
import Container from './components/Container.js';
import DetailModal from './components/DetailModal.js';
import Header from './components/Header.js';
import Loading from './components/Loading.js';
import NeedPlugin from './components/NeedPlugin.js';
import SideBar from './components/SideBar.js';
import EventTable from './components/EventTable.js';
import TextBox from './components/TextBox.js';
import { connect } from 'react-redux';
import { getEvents, getEventDetailData, getPopularEvents } from './actions/SampleActions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, displayEventDetails: <TextBox/> };
  }

  toggleDetail =  (id) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    let details = this.props.events[id];
    if (!details)
      return;
    let contract_group_id = details.primary_contract_group_id;
    let contract_group = this.props.contract_groups[contract_group_id];
    
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

  handleClick = (e) => {
    this.props.onButtonClick(e);
    this.setState({
      isOpen: false
    });
  }

  render() {
    if (this.props.failure)
      return <NeedPlugin/>
    const {events} = this.props;

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
        <SideBar options={ options } onClick={ this.handleClick }/>
    <Section id="main-content">
      <Section className="wrapper">
        <Container>
        {
          this.state.isOpen ? (
            <div>
              { this.state.displayEventDetails }
              <Button onClick={ this.toggleDetail } name="Back to event list"/>
            </div>
          ) : (
            <EventTable events={ events } onClick={ this.toggleDetail }/>
          )
        }
        </Container>

        <Loading loading={ this.props.loading }/>

      </Section>
    </Section>
  </Section>
    );
  }
}

const mapStateToProps = (state) => {  
  return { 
    events: state.events, 
    contract_groups: state.contract_groups, 
    contracts: state.contracts, 
    loading:  state.loading,
    failure: state.failed
  }  
}  
 
const mapDispatchToProps = {  
  onButtonClick: getEvents,
  displayModal: getEventDetailData
}  

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App) 

export default ConnectedApp;
