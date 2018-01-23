import React, { Component } from 'react';

class TableHead extends Component {  
  render() {
    return (
      <th>{ this.props.children }</th>
    );
  }
}

export default TableHead;
