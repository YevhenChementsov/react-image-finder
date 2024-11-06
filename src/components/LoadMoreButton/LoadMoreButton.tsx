import { ButtonWrapper, LoadButton } from './LoadMoreButton.styled';

interface LoadMoreButtonProps {
  onSearch: () => void;
}

export function LoadMoreButton({ onSearch }: LoadMoreButtonProps) {
  return (
    <ButtonWrapper>
      <LoadButton type="button" onClick={onSearch}>
        Load more
      </LoadButton>
    </ButtonWrapper>
  );
}
