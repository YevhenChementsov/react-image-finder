import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    value: '',
  };

  handleSearchBarSubmit = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}
