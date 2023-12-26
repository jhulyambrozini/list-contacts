import { ButtonCircleContainer } from './styles'
import { ButtonProps } from '.'

const ButtonCircle = ({ children, padding, onclick, type }: ButtonProps) => {
  return (
    <ButtonCircleContainer padding={padding} onClick={onclick} type={type}>
      {children}
    </ButtonCircleContainer>
  )
}

export default ButtonCircle
