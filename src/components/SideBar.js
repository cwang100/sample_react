import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SideBar extends Component { 
  buildOptions = () => {
    let displayOptions = [];
    _.each(this.props.options, (option, key) => {
      function handleOnClick () {

        this.props.onClick(option.value);
      }

      displayOptions.push(
          <li key={key}>
          <i></i>
            <a onClick={ handleOnClick.bind(this) }>
                <span>{ option.name }</span>
            </a>
          </li>
        );
    });
    this.setState({ displayOptions });
  }

  componentWillMount() {
    this.buildOptions();
  }

  render() {
    return (
    <aside>
      <div id="sidebar" className="nav-collapse ">
        <ul className="sidebar-menu">
          { this.state.displayOptions }
        </ul>
      </div>
    </aside>
    );
  }
}

SideBar.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.array
};

export default SideBar;
