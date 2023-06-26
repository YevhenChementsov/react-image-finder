import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, modalImageUrl, imageDescription }) => {
  return (
    <>
      <Image src={imageUrl} data-src={modalImageUrl} alt={imageDescription} />
    </>
  );
};

ImageGalleryItem.propTypes = {
  imageDescription: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  modalImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
