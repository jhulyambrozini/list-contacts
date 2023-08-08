import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`
export default GlobalStyle

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: rgb(79, 67, 215);

   @media (max-width: 426px) {
    font-size: 26px;
  }
`
