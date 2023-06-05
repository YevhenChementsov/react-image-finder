import { Component } from 'react';

import { ToastContainer, Zoom } from 'react-toastify';
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
        {this.state.error ? (
          <h1>{this.state.error.message}</h1>
        ) : (
          <div>
            <SearchBar onSubmit={this.handleSearchBarSubmit} />
            <ImageGallery value={this.state.value} onError={this.handleError} />
          </div>
        )}
        <ToastContainer
          position="top-right"
          transition={Zoom}
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
        />
      </>
    );
  }
}
