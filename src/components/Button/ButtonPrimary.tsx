import { ButtonPrimaryContainer } from './styles'
import { ButtonProps } from '.'

const ButtonPrimary = ({ children, padding, onclick }: ButtonProps) => {
  return (
    <ButtonPrimaryContainer padding={padding} onClick={onclick}>
      {children}
    </ButtonPrimaryContainer>
  )
}

export default ButtonPrimary
