import ScrollToTop from 'react-scroll-to-top';
import styled from 'styled-components';

export const ToTopButton = styled(ScrollToTop)`
  right: 24px;
  bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 50%;
  background-color: transparent;
  color: #26327f;
  opacity: 0.5;
  box-shadow: 0 0px 16px 0 #8480b1;
  transition: background-color 0.3s, opacity 0.5s;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;
