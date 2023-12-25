import styled from 'styled-components'
import { colors } from '../../styles'

type ButtonProps = {
  padding: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(100, 100, 100, 0.1);
  color: ${colors.primary01};
  padding: ${(props) => props.padding};
`
export const ButtonPrimaryContainer = styled(Button)`
  background-color: transparent;
  border: 1px solid ${colors.primary01};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  span {
    font-size: 1.6rem;
  }
`

export const ButtonSecondaryContainer = styled(Button)`
  background-color: ${colors.primary07};

  span {
    font-size: 1.8rem;
  }
`

export const ButtonCircleContainer = styled(Button)`
  border-radius: 50%;
  background-color: ${colors.primary07};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`
