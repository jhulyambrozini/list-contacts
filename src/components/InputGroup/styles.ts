import styled from 'styled-components'
import { colors } from '../../styles'

export const InputGroupContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 4rem;

  label {
    color: ${colors.grey01};
    font-size: 1.8rem;
    position: absolute;
    top: -16px;
    left: 12px;
    background-color: #fff;
    padding: 4px 8px;
  }

  input {
    width: 100%;
    border: none;
    border: 1px solid ${colors.grey02};
    border-radius: 5px;
    padding: 1.4rem;
  }

  @media screen and (max-width: 426px) {
    label {
      font-size: 1.6rem;
    }
  }
`
