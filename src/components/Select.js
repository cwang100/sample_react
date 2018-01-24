import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {  
	buildOptions = () => {
		let displayOptions = [];
		_.each(this.props.options, (option, key) => {
			displayOptions.push(<option key={key} value={ option.value }>{ option.name }</option>)
		});
		this.setState({ displayOptions });
	}

	handleOnChange = (e) => {
		let value = e.target.value;
		this.props.onChange(value);
	}

	componentWillMount() {
    this.buildOptions();
  }

  render() {
    return (
      <select className="form-control" onChange={ this.handleOnChange }> { this.state.displayOptions }</select>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array
};

export default Select;
