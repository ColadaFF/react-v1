import { render } from 'react-dom';
import React from 'react';
import Title from './components/title';
import Button from './components/button';
// import DataLoader from './components/DataLoader';
import Select from './components/combo';

const options = [
  {
    label: 'Sí',
    value: '1',
  },
  {
    label: 'No',
    value: '2',
  },
  {
    label: 'Quizá',
    value: '3',
  },
];

const App = () => (
  <div>
    <Title title="Hello world, Daniel!" style={{ textAlign: 'center', color: 'blue' }} />
    <Title title="Hello world, Daniel!" style={{ textAlign: 'center', color: 'red' }} />
    <Title title="Hello world, Daniel!" style={{ textAlign: 'center', color: 'green' }} />
    <Button name="Hello button" />
    <Select options={options} />
  </div>
);

render(<App />, document.getElementById('root'));
