import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: "Roboto";
    height: 100%;
    margin: 0;
    width: 100%;
  }
  #root {
    height: 100%;
  }
`
