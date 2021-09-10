import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.medium}
    height: 100%;

    a {
      text-decoration: none;
      color: inherit
    }
  }
`;
