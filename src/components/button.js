import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button className="button">
        { this.props.name }
      </button>
    );
  }
}

export default Button;