import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 2.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 426px) {
    padding: 0 1.6rem;
  }
`
