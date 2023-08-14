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
  max-width: 560px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
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
export const Button = styled.button`
  background-color: #CB2B2B;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  text-align: center;

  &:hover {
    opacity: .9;
  }

  img {
    width: 24px;
  }
`
