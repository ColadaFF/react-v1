import React, { Component } from 'react';
import { string, func } from 'prop-types';

class Input extends Component {
  static propTypes = {
    type: string.isRequired,
    placeholder: string,
    value: string,
    onChange: func.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    value: '',
  };

  render() {
    const { type, placeholder, value, onChange } = this.props;
    return (
      <div className="field">
        <input onChange={onChange} value={value} type={type} placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;
