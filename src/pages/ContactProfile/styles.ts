import styled from 'styled-components'
import bg from '../../assets/bg.png'

export const ContactProfileContainer = styled.div`
  main {
    position: absolute;
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
  position: relative;

  a {
    position: absolute;
    top: 2.5rem;
    right: 3rem;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  @media screen and (max-width: 426px) {
    a {
      top: 2.4rem;
      right: 2.4rem;
    }
  }
`
