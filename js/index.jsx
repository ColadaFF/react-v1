import { render } from 'react-dom';
import React from 'react';
import Title from './components/title';

const App = () => (
  <div>
    <Title title="Hello world, Daniel!" style={{ textAlign: 'center', color: 'blue' }} />
    <Title title="Hello world, Daniel!" style={{ textAlign: 'center', color: 'red' }} />
    <Title title="Hello world, Daniel!" style={{ textAlign: 'center', color: 'green' }} />
  </div>
);

render(<App />, document.getElementById('root'));
