import { useRef } from 'react'
import InputGroup from '../InputGroup'
import { Button } from '../Button'
import * as Style from './styles'
import ButtonIcon from '../Button/ButtonIcon'
import trashIcom from '../../assets/trash-icon.svg'

const Form = () => {
  function handleChange() {
    return
  }

  const firtsNameRef = useRef()
  const lastNameRef = useRef()
  const telRef = useRef()
  const emailRef = useRef()

  return (
    <Style.FormContainer>
      <Style.FormInputsControls>
        <div>
          <InputGroup
            id="firstname"
            label="Nome"
            onchange={handleChange}
            ref={() => firtsNameRef}
            type="text"
          />
          <InputGroup
            id="lastname"
            label="Sobrenome"
            onchange={handleChange}
            ref={() => lastNameRef}
            type="text"
          />
        </div>

        <div>
          <InputGroup
            id="tel"
            label="Telefone"
            onchange={handleChange}
            ref={() => telRef}
            type="tel"
          />
          <InputGroup
            id="email"
            label="Email"
            onchange={handleChange}
            ref={() => emailRef}
            type="email"
          />
        </div>
      </Style.FormInputsControls>

      <Style.FormButtonsControls>
        <Button.Circle padding="1.6rem" onclick={handleChange}>
          <ButtonIcon icon={trashIcom} />
        </Button.Circle>

        <Button.Secondary padding="1.2rem 2.4rem" onclick={handleChange}>
          <Button.Label label="SALVAR" />
        </Button.Secondary>
      </Style.FormButtonsControls>
    </Style.FormContainer>
  )
}

export default Form
