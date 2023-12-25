import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 2.4rem;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 426px) {
    padding: 0 1.6rem;
  }
`

export const ListControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 6rem 0 4.8rem 0;
`
