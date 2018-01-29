import React, { Component } from 'react';

class Header extends Component {  
  render() {
    return (
      <header className="header dark-bg">
        <div className="toggle-nav">
          <div className="icon-reorder tooltips" data-original-title="Toggle Navigation" data-placement="bottom"><i className="icon_menu"></i></div>
        </div>

        <a href="index.html" className="logo">S<span className="lite">MARKET</span></a>
      </header>
    );
  }
}

export default Header;
