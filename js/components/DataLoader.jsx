import React, { Component } from 'react';
import API from '../api';
import Card from './card';

function renderCard(item) {
  const { thumbnailUrl, title, url, album, id } = item;
  return <Card image={thumbnailUrl} header={title} url={url} album={album} id={id} />;
}

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
  }

  componentDidMount() {
    API.getPhotos().then(data => {
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    const { loading, data } = this.state;
    const renderData = data.map(renderCard);
    if (loading) {
      return <h1>Cargando...</h1>;
    }
    return <div>{renderData}</div>;
  }
}

export default DataLoader;
