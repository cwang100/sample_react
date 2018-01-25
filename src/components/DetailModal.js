import _ from 'lodash';
import React from 'react';
import Table from './Table.js';
import TableData from './TableData.js';
import TableRow from './TableRow.js';
import TextBox from './TextBox.js';

class DetailedModal extends React.Component {
	buildContracts = () => {
		let contractTable = [];
		_.each(this.props.contracts, (contract) => {
			contractTable.push(<TableRow><TableData>Name: </TableData><TableData>{contract.name}</TableData></TableRow>);
			if(contract.cloth_number)
				contractTable.push(<TableRow><TableData>Cloth Number: </TableData><TableData>{String(contract.cloth_number)}</TableData></TableRow>);
			if(contract.jockey)
				contractTable.push(<TableRow><TableData>Jockey: </TableData><TableData>{contract.jockey}</TableData></TableRow>);
			if(contract.trainer)
				contractTable.push(<TableRow><TableData>Trainer: </TableData><TableData>{contract.trainer}</TableData></TableRow>);
			if(contract.silk)
				contractTable.push(<TableRow><TableData>Silk: </TableData><TableData><img src={contract.silk} alt="no img"/></TableData></TableRow>);
		});

		if (contractTable.length == 0)
    	contractTable = "No Contract";
		return <TextBox><p>Contracts</p><Table>{contractTable}</Table></TextBox>
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
