import styled from 'styled-components'

export const ListContactStyles = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
  margin-top: 40px;
  list-style: none;

  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(100pz, 1fr));
  }

  @media (max-width: 426px){
    display: flex;
    flex-direction: column;
  }
`
