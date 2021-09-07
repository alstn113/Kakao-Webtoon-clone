import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
  a {
      text-decoration: none;
    }
}

body{
  background-color:#fafafa;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family:Verdana;
}
`;
