import _ from 'lodash';
import React from 'react';
import Table from './Table.js';
import TableHead from './TableHead.js';
import TableData from './TableData.js';
import TableRow from './TableRow.js';
import TextBox from './TextBox.js';

class ContractsTable extends React.Component {
	buildContracts = () => {
		let contractTable = [];
		_.each(this.props.contracts, (contract, key) => {
			let cloth, jockey, trainer, silk;
			if(contract.cloth_number)
				cloth= <TableData>{String(contract.cloth_number)}</TableData>;
			if(contract.jockey)
				jockey = <TableData>{contract.jockey}</TableData>;
			if(contract.trainer)
				trainer= <TableData>{contract.trainer}</TableData>;
			if(contract.silk)
				silk = <TableData><img src={contract.silk} alt="no img"/></TableData>;

			let contractRow = <TableRow key={key}><TableData>{contract.name}</TableData>{cloth}{jockey}{trainer}{silk}</TableRow>;
			contractTable.push(contractRow);
		});

		if (contractTable.length == 0)
    	contractTable = "No Contract";
		return contractTable;
	}

  render() {
		if (!this.props.contracts)
	      return <Table/>
	  let contract = this.props.contracts[0];
	  if (!contract)
	  	return <Table/>
	  let cloth, jockey, trainer, silk;
	  if(contract.cloth_number)
			cloth = <TableHead>Cloth Number</TableHead>;
		if(contract.jockey)
			jockey = <TableHead>Jockey</TableHead>;
		if(contract.trainer)
			trainer = <TableHead>Trainer</TableHead>;
		if(contract.silk)
			silk = <TableHead>Silk</TableHead>;

    let tableHeader = <TableRow><TableHead>Name</TableHead>{cloth}{jockey}{trainer}{silk}</TableRow>;
    let contractTable = this.buildContracts();
    return <Table>{tableHeader}{contractTable}</Table>
	}
}

export default ContractsTable;
