import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    background: ${({ theme }) => theme.color.background};
    ${({ theme }) => theme.font.medium}
    height: 100%;
    color: ${({ theme }) => theme.color.white};
    a {
      text-decoration: none;
      color: inherit
    }
  }

`;
