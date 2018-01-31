import _ from 'lodash';
import React, { Component } from 'react';
import Table from './Table.js';
import TableData from './TableData.js';
import TableHead from './TableHead.js';
import TableRow from './TableRow.js';
import Button from './Button.js';


class PopularTable extends Component {  
  handleOnChange = (id) => {
    window.open("https://www.smarkets.com/event/" + id);
  }

  render() {
    let tableContent = [];
    // this.props.events.results does not work
    _.each(this.props.events, (value) => {
      let eventID = <TableData>{value.id}</TableData>;
      let eventName = <TableData>{value.name}</TableData>;
      let eventExpires = <TableData>{value.expires}</TableData>;
      let eventDetail = <TableData><Button onClick={() => this.handleOnChange(value.id)} name={"View Details"} id={value.id}/></TableData>;
      tableContent.push(<TableRow key={value.id}>{eventID}{eventName}{eventExpires}{eventDetail}</TableRow>);
    });

    return (
      <Table>
        <TableRow>
            <TableHead>Event ID</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead>Event Expires</TableHead>
            <TableHead></TableHead>
          </TableRow>
          {tableContent}
      </Table>
    );
  }
}

export default PopularTable;
