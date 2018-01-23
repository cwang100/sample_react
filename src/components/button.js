import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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