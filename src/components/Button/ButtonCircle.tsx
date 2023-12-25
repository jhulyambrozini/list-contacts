import { ButtonCircleContainer } from './styles'
import { ButtonProps } from '.'

const ButtonCircle = ({ children, padding, onclick }: ButtonProps) => {
  return (
    <ButtonCircleContainer padding={padding} onClick={onclick}>
      {children}
    </ButtonCircleContainer>
  )
}

export default ButtonCircle
