import { ButtonPrimaryContainer } from './styles'
import { ButtonProps } from '.'

const ButtonPrimary = ({ children, padding, onclick, type }: ButtonProps) => {
  return (
    <ButtonPrimaryContainer padding={padding} onClick={onclick} type={type}>
      {children}
    </ButtonPrimaryContainer>
  )
}

export default ButtonPrimary
