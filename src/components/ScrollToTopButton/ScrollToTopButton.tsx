import ToTopIcon from 'icons/circle-up.svg?react';

import { ToTopButton } from './ScrollToTopButton.styled';

export function ScrollToTopButton() {
  return (
    <ToTopButton smooth component={<ToTopIcon />} aria-label="to-top-button" />
  );
}
