import { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';

import { AppWrapper, ErrorMessage } from './App.styled';

export interface AppState {
  value: string;
  error: string | null;
}

export class App extends Component<Record<string, never>, AppState> {
  state: AppState = {
    value: '',
    error: null,
  };

  handleError = (error: string) => {
    this.setState({ error });
  };

  handleSubmit = (value: string) => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        {this.state.error ? (
          <ErrorMessage>{this.state.error}</ErrorMessage>
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
