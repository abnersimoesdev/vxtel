import {createGlobalStyle} from 'styled-components'

const theme = {
  fontFamily: '"Arial", sans-serif',
  refSize: '16px',
  primary: '#FF625E',
  secondary: '#FFCDAC',
  dark: '#123638',
  light: '#fffefc'
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: ${theme.fontFamily};
    font-size: ${theme.refSize};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0
  }

  #root {
    min-height: 100%;
    background-color: ${theme.light};
  }
`

export {GlobalStyle, theme}
