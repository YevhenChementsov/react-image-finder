import { Component } from 'react';

import { ToastContainer, Zoom } from 'react-toastify';
import styled from 'styled-components';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {
  state = {
    value: '',
    error: null,
  };

  handleError = error => {
    this.setState({ error });
  };

  handleSubmit = value => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        {this.state.error ? (
          <h1>{this.state.error.message}</h1>
        ) : (
          <AppWrapper>
            <SearchBar onSubmit={this.handleSubmit} />
            <ImageGallery value={this.state.value} onError={this.handleError} />
          </AppWrapper>
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
