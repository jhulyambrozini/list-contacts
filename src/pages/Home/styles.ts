import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 2.4rem;

  @media screen and (max-width: 769px) {
    main {
      width: 100%;
    }
  }

  @media screen and (max-width: 426px) {
    padding: 0 1.6rem;
    width: 100vw;
  }
`
