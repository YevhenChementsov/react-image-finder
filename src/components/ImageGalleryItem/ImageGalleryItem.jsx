import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, modalImageUrl, imageDescription }) => {
  return (
    <>
      <Image src={imageUrl} data-src={modalImageUrl} alt={imageDescription} />
    </>
  );
};

export default ImageGalleryItem;
