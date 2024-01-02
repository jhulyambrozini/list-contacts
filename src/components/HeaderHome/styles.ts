import styled from 'styled-components'
import { colors, typography } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 3.2rem;

  h1 {
    font-family: ${typography.secondary};
    font-weight: 400;
    font-size: 6.4rem;
    line-height: 66px;
    color: ${colors.primary02};

    span {
      color: ${colors.primary06};
    }

    @media screen and (max-width: 426px) {
      font-size: 4.8rem;
      line-height: 50px;
    }
  }
`
export const LineDeco = styled.img`
  position: absolute;
  top: 29px;
  width: 100%;

  @media screen and (max-width: 426px) {
    top: 10px;
    min-width: 100%;
    width: 100vw;
  }
`
