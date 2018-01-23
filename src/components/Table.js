import React, { Component } from 'react';


//usage: <StaffItemPanel items={rawData} />
class Table extends Component {
	constructor(props) {
    super(props);
  }

  let header = [];
  let items = [];


  this.props.header.forEach(head => {
          items.push(<TableItem key={item.key} item={item}/>);
      });
  if(this.props.items.length == 0) {
      items.push(<tr><th colSpan=this.props.header.length className="tempEmpty">Nothing to show</th></tr>);
  }else {
      this.props.items.forEach(item => {
          items.push(<StaffItem key={item.key} item={item}/>);
      });
  }
  
  render() {
    return (
      <table>
        <thead>
          {header}
        </thead>
        <tbody>{items}</tbody>
      </table>
    );
  }
}

export default Button;
