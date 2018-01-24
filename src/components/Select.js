import React, { Component } from 'react';

class Row extends Component {  
  render() {
    return (
      <select className="form-control">{ this.props.children }</select>
    );
  }
}

export default Row;
