import styled, { createGlobalStyle } from 'styled-components'

export const typography = {
  primary: "'Roboto', sans-serif",
  secondary: "'Poppins', sans-serif"
}

export const breakpoints = {
  desktop: '768px',
  mobile: '426px'
}

export const colors = {
  primary01: '#030020',
  primary02: '#05003A',
  primary03: '#11087D',
  primary04: '#2E249A',
  primary05: '#5248C0',
  primary06: '#C0BAFF',
  primary07: '#D0CCFF',
  primary08: '#E7E5FF',
  primary09: '#F1F0FD',
  grey01: '#1E1E1E',
  grey02: '#595959',
  grey03: '#F7F7F7',
  error: '#BE0E0E',
  success: '#10791B'
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${typography.primary};
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 426px) {
    .container {
      min-height: calc(100vh + 180px);
    }
  }
`
export default GlobalStyle
