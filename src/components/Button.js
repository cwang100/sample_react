import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button 
	      className={"btn btn-block btn-success " + (this.props.size === "L"? "btn-lg" : "")}
          id={ this.props.id }     
	      disabled={ this.props.disabled }
	      onClick={ this.props.onClick }
      >
        { this.props.name }
      </button>
    );
  }
}

export default Button;
