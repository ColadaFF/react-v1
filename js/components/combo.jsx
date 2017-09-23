import React, { Component } from 'react';
import { string, arrayOf, shape } from 'prop-types';

function renderOption(option) {
  const { label, value } = option;
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
}

const ErrorMessage = props => <span style={{ color: 'red', textAlign: 'center' }}>{props.message}</span>;

ErrorMessage.propTypes = {
  message: string.isRequired,
};

const DEFAULT_VALUE = '';

const DEFAULT_ELEMENT = {
  value: DEFAULT_VALUE,
  label: 'Seleccione un valor',
};

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: true,
      touched: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const error = e.target.value === DEFAULT_VALUE;
    this.setState({
      value,
      touched: true,
      error,
    });
  }

  render() {
    const { options } = this.props;
    const { value, error, touched } = this.state;
    const optionsWihtDefault = [DEFAULT_ELEMENT, ...options];
    return (
      <div>
        <select value={value} onChange={this.handleChange}>
          {optionsWihtDefault.map(option => renderOption(option))}
        </select>
        {error && touched ? <ErrorMessage message="El valor es requerido" /> : null}
      </div>
    );
  }
}

Select.propTypes = {
  options: arrayOf(shape({ label: string.isRequired, value: string.isRequired })).isRequired,
};

export default Select;
