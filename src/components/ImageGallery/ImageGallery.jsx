import { Component } from 'react';

import fetchImages from 'services/api';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    currentPage: 1,
    totalImages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      try {
        const { hits, totalHits } = await fetchImages(
          this.props.value,
          this.state.currentPage,
        );

        this.setState(({ images }) => ({
          images: [...images, ...hits],
        }));
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  render() {
    return (
      <ul>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    );
  }
}
