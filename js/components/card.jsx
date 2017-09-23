import React from 'react';
import { string } from 'prop-types';

const Card = props => (
  <div className="ui card">
    <div className="image">
      <img alt="" src={props.image} />
    </div>
    <div className="content">
      <a className="header">{props.header}</a>
      <div className="meta">
        <span className="date">{props.url}</span>
      </div>
      <div className="description">{`Album: ${props.album}, name: ${props.header}`}</div>
    </div>
    <div className="extra content">
      <a>
        <i className="user icon" />
        ID: {props.id}
      </a>
    </div>
  </div>
);

Card.propTypes = {
  image: string.isRequired,
  header: string.isRequired,
  url: string.isRequired,
  album: string.isRequired,
  id: string.isRequired,
};

export default Card;
