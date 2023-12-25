import styled from 'styled-components'
import { colors, typography } from '../../styles'
import bg from '../../assets/bg.png'

export const Header = styled.header`
  background: url(${bg}) no-repeat;
  width: 100%;
  height: 308px;
  background-position: center;
  max-width: 769px;

  a {
    display: flex;
    justify-content: end;
    margin-top: 3.2rem;
    margin-right: 4.8rem;
  }

  @media screen and (max-width: 426px) {
    a {
      margin-top: 2.4rem;
      margin-right: 2.4rem;
    }
  }
`

export const ButtonAddPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;
  gap: 8px;

  button {
    border-radius: 50%;
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: #fff;
  }

  span {
    color: ${colors.primary09};
    text-align: center;

    font-family: ${typography.secondary};
    font-size: 24px;
    font-weight: 500;
  }

  @media screen and (max-width: 426px) {
    margin-top: 3rem;

    button {
      height: 100px;
      width: 100px;
    }

    span {
      font-size: 2rem;
    }
  }
`

export const HeaderBackground = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    max-width: 100%;
    min-height: 100%;
  }
`
