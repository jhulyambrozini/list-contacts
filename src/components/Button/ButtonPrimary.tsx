import { ButtonPrimaryContainer } from './styles'
import { ButtonProps } from '.'

const ButtonPrimary = ({
  children,
  padding,
  onclick,
  type,
  title
}: ButtonProps) => {
  return (
    <ButtonPrimaryContainer
      padding={padding}
      onClick={onclick}
      type={type}
      title={title}
    >
      {children}
    </ButtonPrimaryContainer>
  )
}

export default ButtonPrimary
