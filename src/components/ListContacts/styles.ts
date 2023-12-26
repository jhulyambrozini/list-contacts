import styled from 'styled-components'
import { colors } from '../../styles'

export const ListContactsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 100vh;
  width: 100%;
  margin-bottom: 4.8rem;

  padding-right: 1.5rem;
  overflow-y: scroll;
  scrollbar-width: 6px;
  scrollbar-color: rgba(63, 67, 80, 0.24);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(63, 67, 80, 0.24);
    border-radius: 3px;
  }

  li {
    width: 100%;
    list-style: none;
  }
`
export const ParagraphEmpty = styled.p`
  font-size: 1.6rem;
  color: ${colors.grey01};
  text-align: center;
`
