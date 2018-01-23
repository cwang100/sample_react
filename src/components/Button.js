import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  
  render() {
    return (
      <button 
	      className="btn btn-lg btn-block btn-primary"       
	      disabled={ this.props.disabled }
	      onClick={ this.props.onClick }
      >
        { this.props.name }
      </button>
    );
  }
}

export default Button;
