import { ButtonCircleContainer } from './styles'
import { ButtonProps } from '.'

const ButtonCircle = ({
  children,
  padding,
  onclick,
  type,
  title
}: ButtonProps) => (
  <ButtonCircleContainer
    padding={padding}
    onClick={onclick}
    type={type}
    title={title}
  >
    {children}
  </ButtonCircleContainer>
)

export default ButtonCircle
