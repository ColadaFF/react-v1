import React from 'react';
import { string } from 'prop-types';

const Button = props => <button className="ui primary button">{props.name}</button>;

Button.propTypes = {
  name: string.isRequired,
};

export default Button;
