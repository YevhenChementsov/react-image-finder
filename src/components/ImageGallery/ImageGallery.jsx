import { Component } from 'react';

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
    if (
      prevProps.value !== this.props.value ||
      prevState.currentPage !== this.state.currentPage
    ) {
      try {
        this.setState({ showLoader: true });

        const { hits, totalHits } = await api.fetchImages(
          this.props.value,
          this.state.currentPage,
        );

        if (!hits.length) {
          toast.error('Please, enter proper query!');
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

  toggleModal = index => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      activeImageIndex: index,
    }));
  };

  render() {
    const { images, showModal, activeImageIndex } = this.state;

    return (
      <>
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
        </ImageList>
      </>
    );
  }
}

export default ImageGallery;
