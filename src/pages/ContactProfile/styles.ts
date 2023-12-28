import styled from 'styled-components'
import bg from '../../assets/bg.png'

export const Overlay = styled.div`
  width: 100%;
  height: 120vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99;

  @media screen and (max-width: 426px) {
    height: 142vh;
  }
`

export const ContactProfileContainer = styled.div`
  main {
    min-height: 100vh;
  }
  @media screen and (max-width: 768px) {
    main {
      width: 100vw;
    }
  }
`

export const Background = styled.div`
  background: url(${bg}) no-repeat;
  width: 100%;
  height: 308px;
  background-position: center;
  max-width: 769px;
  position: absolute;

  display: flex;
  justify-content: end;
  padding-top: 2.5rem;
  padding-right: 3rem;

  a {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 426px) {
    padding-right: 2.4rem;
  }
`
