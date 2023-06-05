import { Component } from 'react';

import { ToastContainer, Zoom, toast } from 'react-toastify';
import api from 'services/api';

export default class ImageGallery extends Component {
  state = {
    activeImageIndex: null,
    currentPage: 1,
    error: null,
    images: [],
    showLoader: false,
    showModal: false,
    totalImages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      try {
        this.setState({ showLoader: true });

        const { hits, totalHits } = await api.fetchImages(
          this.props.value,
          this.state.currentPage,
        );

        if (!hits.length) {
          toast.warning('Please, enter proper query!');
        }

        this.setState(({ images }) => ({
          images: [...images, ...hits],
          totalImages: totalHits,
        }));
      } catch (error) {
        this.setState({ error }, () => {
          if (this.props.onError) {
            this.props.onError(error);
          }
        });
      } finally {
        if (prevState.images.length > 11) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }

        this.setState({ showLoader: false });
      }
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.images.map(image => (
            <li key={image.id}>
              <img src={image.webformatURL} alt={image.tags} />
            </li>
          ))}
        </ul>
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
