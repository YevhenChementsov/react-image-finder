import { Image } from './ImageGalleryItem.styled';

export interface ImageGalleryItemProps {
  imageUrl: string;
  modalImageUrl: string;
  imageDescription: string;
}

export function ImageGalleryItem({
  imageUrl,
  modalImageUrl,
  imageDescription,
}: ImageGalleryItemProps) {
  return (
    <>
      <Image src={imageUrl} data-src={modalImageUrl} alt={imageDescription} />
    </>
  );
}
