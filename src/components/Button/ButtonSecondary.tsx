import { ButtonSecondaryContainer } from './styles'
import { ButtonProps } from '.'

const ButtonSecondary = ({ children, padding, onclick, type }: ButtonProps) => {
  return (
    <ButtonSecondaryContainer padding={padding} onClick={onclick} type={type}>
      {children}
    </ButtonSecondaryContainer>
  )
}

export default ButtonSecondary
