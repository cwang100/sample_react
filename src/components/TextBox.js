import React, { Component } from 'react';

class TextBox extends Component {  
  render() {
	return (
    	<div 
	    	className="card mb-4 box-shadow"
    	>
        { this.props.children }
      </div>
    );
  }
}

export default TextBox;