import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseStats as is, decreaseStats as ds } from './ducks';
// import Button from '../button';

class PersonTable extends Component {
  static propTypes = {
    persons: shape().isRequired,
    increaseStats: func.isRequired,
    decreaseStats: func.isRequired,
  };

  renderPerson = person => {
    const { increaseStats, decreaseStats } = this.props;
    return (
      <tr key={person.id}>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.stats}</td>
        <td>
          <div className="large ui buttons">
            <button className="ui button" onClick={() => increaseStats(person.id)}>
              +
            </button>
            <button className="ui button" onClick={() => decreaseStats(person.id)}>
              -
            </button>
          </div>
        </td>
      </tr>
    );
  };

  render() {
    const { persons } = this.props;
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATS</th>
            <th>OPS</th>
          </tr>
        </thead>
        <tbody>{persons.map(this.renderPerson)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ persons }) {
  return {
    persons: persons
      .toList()
      .sortBy(person => person.stats)
      .reverse(),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increaseStats: is,
      decreaseStats: ds,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonTable);
