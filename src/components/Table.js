import React, { Component } from 'react';

class Table extends Component {
	constructor(props) {
    super(props);
  }

  let header = [];
  let items = [];


  this.props.items.forEach(item => {
          items.push(<StaffItem key={item.key} item={item}/>);
      });
  if(this.props.items.length == 0) {
      items.push(<tr><th colSpan="5" className="tempEmpty">Nothing to show</th></tr>);
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
