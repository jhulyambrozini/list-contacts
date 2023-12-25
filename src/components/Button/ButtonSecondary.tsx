import { ButtonSecondaryContainer } from './styles'
import { ButtonProps } from '.'

const ButtonSecondary = ({ children, padding, onclick }: ButtonProps) => {
  return (
    <ButtonSecondaryContainer padding={padding} onClick={onclick}>
      {children}
    </ButtonSecondaryContainer>
  )
}

export default ButtonSecondary
