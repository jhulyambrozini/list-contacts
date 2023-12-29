import styled from 'styled-components'
import { colors, typography } from '../../styles'

export const PopUpConfirmContainer = styled.div`
  width: 280px;
  height: 230px;
  border-radius: 5px;
  background: ${colors.grey03};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 4.8rem 2.4rem;
  z-index: 9999;

  p {
    color: ${colors.grey01};
    text-align: center;

    font-family: ${typography.secondary};
    font-size: 2rem;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 66px;
  }
`
