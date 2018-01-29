import React, { Component } from 'react';

class Loading extends Component {  
  render() {
    return (
      <div className="loading-screen" style={ this.props.loading ? {display: 'block'} : {display: 'none'} }>
      </div>
    );
  }
}

export default Loading;
