import React, { Component } from 'react';

class Section extends Component {  
  render() {
    return (
      <section id={this.props.id} className={ this.props.className }>{ this.props.children }</section>
    );
  }
}

export default Section;
