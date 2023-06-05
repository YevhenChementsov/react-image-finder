import { Component } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {
  state = {
    value: '',
    error: null,
  };

  handleError = error => {
    this.setState({ error });
  };

  handleSearchBarSubmit = value => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        {/* Main Error Message */}
        {this.state.error ? (
          <h1>{this.state.error.message}</h1>
        ) : (
          <div>
            <SearchBar onSubmit={this.handleSearchBarSubmit} />
            <ImageGallery value={this.state.value} onError={this.handleError} />
          </div>
        )}
      </>
    );
  }
}
