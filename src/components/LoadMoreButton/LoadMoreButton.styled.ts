import styled from 'styled-components';

export const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.button};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${props => props.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 160px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
`;
