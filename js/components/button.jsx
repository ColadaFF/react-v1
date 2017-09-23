import React from 'react';
import { string } from 'prop-types';

const Button = props => (
  <button className="ui primary button" type={props.type}>
    {props.name}
  </button>
);

Button.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
};

export default Button;
