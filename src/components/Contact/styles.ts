import styled from 'styled-components'
import { colors } from '../../styles'

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;

  padding-bottom: 2.4rem;
  border-bottom: 2px solid #f1f1f1;
`

export const Image = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .line-deco {
    width: 4px;
    height: 90px;
    background: ${colors.primary01};
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0px 2px 10px 0px rgba(41, 41, 41, 0.1);
    margin-right: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 70px;
      height: 70px;
    }

    .line-deco {
      height: 70px;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: calc(100% - 40px);
  margin-right: 2.4rem;

  h2 {
    color: ${colors.grey01};
    font-size: 2rem;
    max-width: 115px;
  }

  span {
    color: ${colors.grey02};
    font-size: 1.6rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    align-items: start;

    h2 {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.4rem;
    }
  }
`
