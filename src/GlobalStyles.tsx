import { createGlobalStyle } from "styled-components";

//TODO: keep this? read docs
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: -apple-system, "Helvetica Neue", sans-serif;
    background-color: #138595;
    height: 100%;
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
