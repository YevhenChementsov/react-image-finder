import { Component } from 'react';

import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { toast } from 'react-toastify';
import api from 'services/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageItem, ImageList } from './ImageGallery.styled';

class ImageGallery extends Component {
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
      this.setState(
        {
          images: [],
          currentPage: 1,
        },
        () => this.fetchImagesAndPhoto(),
      );
    }
  }

  fetchImagesAndPhoto = async () => {
    const { value, onError } = this.props;
    const { currentPage } = this.state;

    try {
      this.setState({ showLoader: true });

      const { hits, totalHits } = await api.fetchImages(value, currentPage);

      if (!hits.length) {
        toast.error('Please, enter a proper query!');
      }

      this.setState(({ images }) => ({
        images: [...images, ...hits],
        totalImages: totalHits,
      }));
    } catch (error) {
      this.setState({ error }, () => {
        if (onError) {
          onError(error);
        }
      });
    } finally {
      this.setState({ showLoader: false }, () =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      );
    }
  };

  loadMoreImages = () => {
    const { images, totalImages } = this.state;

    if (images.length === totalImages) {
      return toast.error('There is no more images to show');
    }

    this.setState(
      ({ currentPage }) => ({ currentPage: currentPage + 1 }),
      () => this.fetchImagesAndPhoto(),
    );
  };

  toggleModal = index => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      activeImageIndex: index,
    }));
  };

  render() {
    const { images, showLoader, showModal, activeImageIndex } = this.state;

    return (
      <>
        {images.length > 1 && (
          <ImageList>
            {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
              <ImageItem key={id} onClick={() => this.toggleModal(index)}>
                <ImageGalleryItem
                  imageUrl={webformatURL}
                  modalImageUrl={largeImageURL}
                  imageDescription={tags}
                />
              </ImageItem>
            ))}
          </ImageList>
        )}

        {!showLoader && images.length > 1 && (
          <LoadMoreButton onSearch={this.loadMoreImages} />
        )}

        {showLoader && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {
              <img
                src={images[activeImageIndex].largeImageURL}
                alt={images.tags}
              />
            }
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
