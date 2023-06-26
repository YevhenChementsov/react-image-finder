import PropTypes from 'prop-types';
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

LoadMoreButton.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default LoadMoreButton;
