import { ButtonWrapper, LoadButton } from './LoadMoreButton.styled';

export function LoadMoreButton({ onSearch }) {
  return (
    <ButtonWrapper>
      <LoadButton type="button" onClick={onSearch}>
        Load more
      </LoadButton>
    </ButtonWrapper>
  );
}
