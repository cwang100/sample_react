import React, { Component } from 'react';

class Column extends Component {  
	render() {
    return (
      <div className={`col-sm-${ this.props.width }`}>{ this.props.children }</div>
    );
  }
}

export default Column;
