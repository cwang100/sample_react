import React from 'react';
import Table from './Table.js';
import TableData from './TableData.js';
import TableRow from './TableRow.js';
import TextBox from './TextBox.js';

class DetailedModal extends React.Component {
  render() {
	if (!this.props.details)
      return <TextBox/>

    let startTime = <TableRow><TableData>Start Time</TableData><TableData>{this.props.details.start_datetime}</TableData></TableRow>;
    let description = <TableRow><TableData>Event Description</TableData><TableData>{this.props.details.description}</TableData></TableRow>;
    let contactID = <TableRow><TableData>Contact Group ID</TableData><TableData>{this.props.details.primary_contract_group_id}</TableData></TableRow>;
    let pa_status = <TableRow><TableData>Pa Status</TableData><TableData>{this.props.details.pa_status}</TableData></TableRow>;
    let reversed = <TableRow><TableData>Reversed</TableData><TableData>{String(this.props.details.reversed)}</TableData></TableRow>;
    return <TextBox><Table>{startTime}{description}{contactID}{pa_status}{reversed}</Table></TextBox>
  }
}

export default DetailedModal;
