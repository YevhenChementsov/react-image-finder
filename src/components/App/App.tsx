import { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

// import ImageGallery from '../ImageGallery/ImageGallery';
// import SearchBar from '../SearchBar/SearchBar';

// import { AppWrapper, ErrorMessage } from './App.styled';

export class App extends Component {
  state = {
    value: '',
    error: null,
  };

  // handleError = error => {
  //   this.setState({ error });
  // };

  // handleSubmit = value => {
  //   this.setState({ value });
  // };

  render() {
    return (
      <>
        {/* {this.state.error ? (
          <ErrorMessage>{this.state.error.message}</ErrorMessage>
        ) : (
          <AppWrapper>
            <SearchBar onSubmit={this.handleSubmit} />
            <ImageGallery value={this.state.value} onError={this.handleError} />
          </AppWrapper>
        )} */}
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
