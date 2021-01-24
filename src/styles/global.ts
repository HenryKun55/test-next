import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  
  @font-face {
    font-family: 'Circular Std Book';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Circular Std Book Light'), local('Circular-Std-Book-Light'),
        url('/fonts/CircularStdBook.ttf') format('ttf'), 
  }
  
  @font-face {
    font-family: 'Circular Std Book';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Circular Std Book Regular'), local('Circular-Std-Book-Regular'),
        url('/fonts/CircularStdBold.otf') format('otf'), 
  }
  
  @font-face {
    font-family: 'Circular Std Book';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Circular Std Book SemiBold'), local('Circular-Std-Book-SemiBold'),
        url('/fonts/CircularStdBlack.otf') format('otf'), 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
  
`

export default GlobalStyles
