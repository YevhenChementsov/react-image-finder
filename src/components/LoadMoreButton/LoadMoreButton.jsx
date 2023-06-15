import { ButtonWrapper, LoadButton } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onSearch }) => {
  return (
    <ButtonWrapper>
      <LoadButton type="button" onClick={onSearch}>
        Load more
      </LoadButton>
    </ButtonWrapper>
  );
};

export default LoadMoreButton;
