import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';
import { addPerson as ap } from './ducks';
import Input from '../input';
import Button from '../button';

class FormPerson extends Component {
  static propTypes = {
    addPerson: func.isRequired,
  };

  state = {
    name: '',
    id: '',
    stats: '',
  };

  handleAddPerson = event => {
    event.preventDefault();
    this.props.addPerson(this.state, this.state.id);
    this.setState({
      name: '',
      id: '',
      stats: '',
    });
  };

  handleChange = key => e => {
    this.setState({
      [key]: e.target.value,
    });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleAddPerson}>
        <Input onChange={this.handleChange('id')} value={this.state.id} type="text" placeholder="Ej. 1" />
        <Input onChange={this.handleChange('name')} value={this.state.name} type="text" placeholder="Ej. David" />
        <Input onChange={this.handleChange('stats')} value={this.state.stats} type="number" placeholder="Ej. 5" />
        <Button name="Guardar" type="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPerson: ap }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(FormPerson);
