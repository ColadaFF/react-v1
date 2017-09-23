import React from 'react';
import { shape, string } from 'prop-types';

const Title = props => {
  const style = props.style;
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

Title.propTypes = {
  style: shape({}).isRequired,
  title: string.isRequired,
};

export default Title;
