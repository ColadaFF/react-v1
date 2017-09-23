import React from 'react';

const Title = props => {
  console.log(props);
  const style = props.style;
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

export default Title;
