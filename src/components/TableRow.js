import React, { Component } from 'react';

class TableRow extends Component {  
  render() {
    return (
      <tr>{ this.props.children }</tr>
    );
  }
}

export default TableRow;
