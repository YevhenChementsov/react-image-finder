import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const ErrorMessage = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  font-family: 'Caveat Brush', cursive;
  font-size: calc(18px + 14 * ((100vw - 320px) / (1920 - 320)));
`;
