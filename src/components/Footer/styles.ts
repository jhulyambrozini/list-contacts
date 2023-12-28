import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  margin: 5rem 0;

  p {
    text-align: center;
    font-size: 1.4rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${colors.primary02};
    padding-bottom: 2px;
    border-bottom: 1px solid ${colors.primary02};
  }
`
