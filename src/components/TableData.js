import React, { Component } from 'react';

class TableData extends Component {  
  render() {
    return (
      <td>{ this.props.children }</td>
    );
  }
}

export default TableData;
