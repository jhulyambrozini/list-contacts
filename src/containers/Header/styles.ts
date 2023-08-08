import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  img {
    height: 50px;
    padding-right: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 426px) {
    margin-bottom: 16px;

    img {
      height: 40px;
    }
  }
`
