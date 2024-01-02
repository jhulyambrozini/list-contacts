import { ButtonSecondaryContainer } from './styles'
import { ButtonProps } from '.'

const ButtonSecondary = ({
  children,
  padding,
  onclick,
  type,
  title
}: ButtonProps) => (
  <ButtonSecondaryContainer
    padding={padding}
    onClick={onclick}
    type={type}
    title={title}
  >
    {children}
  </ButtonSecondaryContainer>
)

export default ButtonSecondary
