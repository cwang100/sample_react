import _ from 'lodash';
import React, { Component } from 'react';
import Table from './Table.js';
import TableData from './TableData.js';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';
import Button from './Button.js';


class EventTable extends Component {  
  handleOnChange = (id) => {
    this.props.onClick(id);
  }

  render() {
    let tableContent = [];
    _.each(this.props.events, (value) => {
      let eventID = <TableData>{value.id}</TableData>;
      let eventType = <TableData>{value.event_type}</TableData>;
      let eventName = <TableData>{value.name}</TableData>;
      let eventDetail = <TableData><Button onClick={() => this.handleOnChange(value.id)} name={"View Details"} id={value.id}/></TableData>;

      tableContent.push(<TableRow key={value.id}>{eventID}{eventType}{eventName}{eventDetail}</TableRow>);
    });
    return (
      <Table>
        <TableRow>
            <TableHead>Event ID</TableHead>
            <TableHead>Event Type</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
          {tableContent}
      </Table>
    );
  }
}

export default EventTable;
