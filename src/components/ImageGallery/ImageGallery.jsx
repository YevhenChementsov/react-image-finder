import { Component } from 'react';

import fetchImages from 'services/api';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      try {
        const data = await fetchImages(this.props.value);
        console.log(data);
      } catch (error) {}
      //   .then(({ hits }) =>
      //     this.setState(({ images }) => ({
      //       images: [...images, ...hits],
      //     })),
      //   );
    }
  }

  render() {
    return (
      <ul>
        {this.state.images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </ul>
    );
  }
}
