import React, { Component } from 'react';

class Table extends Component {  
  render() {
    return (
      <table 
        className="table table-striped"       
      >
      	<tbody>
        { this.props.children }
        </tbody>
      </table>
    );
  }
}

export default Table;
