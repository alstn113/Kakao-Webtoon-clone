import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0 30px;
    font-family: "Poppins";
    background-color: #ffffff;
    font-size: 1.2em;
    margin: 10px auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #8e2ad6;
    border-bottom: 1px dotted;
  }
`;
