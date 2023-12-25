import styled from 'styled-components'

export const ListContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 4.8rem 2.4rem;
  gap: 24px;
  max-height: 100vh;

  overflow-y: scroll;

  li {
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  @media screen and (max-width: 426px) {
    margin: 3.2rem 1.6rem;
  }
`
