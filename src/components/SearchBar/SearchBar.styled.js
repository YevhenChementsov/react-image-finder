import styled from 'styled-components';

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  cursor: pointer;

  background-color: transparent;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* svg {
    fill: ${props => props.theme.colors.white};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.red};
    }
  } */
`;
