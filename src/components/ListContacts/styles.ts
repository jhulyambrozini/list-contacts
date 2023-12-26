import styled from 'styled-components'

export const ListContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.8rem;
  gap: 24px;
  max-height: 100vh;

  overflow-y: scroll;

  li {
    width: 100%;
    list-style: none;
  }

  @media screen and (max-width: 426px) {
    margin: 3.2rem 1.6rem;
  }
`
