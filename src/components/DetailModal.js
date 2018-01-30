import React from 'react';
import Table from './Table.js';
import TableData from './TableData.js';
import TableRow from './TableRow.js';
import TextBox from './TextBox.js';
import ContractsTable from './ContractsTable';

class DetailedModal extends React.Component {
	buildContracts = () => {
		return <TextBox>Contracts:<ContractsTable contracts={this.props.contracts}/></TextBox>
	}

  render() {
		if (!this.props.details || !this.props.contracts)
	      return <TextBox/>

    let startTime = <TableRow><TableData>Start Time</TableData><TableData>{this.props.details.start_datetime}</TableData></TableRow>;
    let description = <TableRow><TableData>Event Description</TableData><TableData>{this.props.details.description}</TableData></TableRow>;
    let pa_status = <TableRow><TableData>Pa Status</TableData><TableData>{this.props.details.pa_status}</TableData></TableRow>;
    let reversed = <TableRow><TableData>Reversed</TableData><TableData>{String(this.props.details.reversed)}</TableData></TableRow>;
    let contractGroupName = <TableRow><TableData>Contract Group Name</TableData><TableData>{this.props.contract_group.name}</TableData></TableRow>;
    let contractTable = this.buildContracts();
    return <TextBox><Table>{startTime}{description}{pa_status}{reversed}{contractGroupName}</Table>{contractTable}</TextBox>
	}
}

export default DetailedModal;
