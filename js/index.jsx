import { render } from 'react-dom';
import React from 'react';
// import Title from './components/title';
// import Button from './components/button';
// import DataLoader from './components/DataLoader';
// import Select from './components/combo';
import { Provider } from 'react-redux';
import Store from './store';
import Persons from './components/persons';

/* const options = [
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
]; */

const App = () => (
  <Provider store={Store}>
    <Persons />
  </Provider>
);

render(<App />, document.getElementById('root'));
