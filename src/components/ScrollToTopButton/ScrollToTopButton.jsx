import { ReactComponent as ToTopIcon } from 'icons/circle-up.svg';
import { ToTopButton } from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  return (
    <ToTopButton smooth component={<ToTopIcon />} aria-label="to-top-button" />
  );
};

export default ScrollToTopButton;
