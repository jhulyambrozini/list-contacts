import { FormEventHandler, useState } from 'react'
import InputGroup from '../InputGroup'
import { Button } from '../Button'
import * as Style from './styles'
import ButtonIcon from '../Button/ButtonIcon'
import trashIcom from '../../assets/trash-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { register, remove } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { TContact } from '../../types/Contact'
// import { TContact } from '../../types/Contact'

type FormProps = {
  id?: number
}

const Form = ({ id }: FormProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [firstName, setFistName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const { items } = useSelector((state: RootState) => state.contact)

  const contactInfos = items.find((i: TContact) => i.id === id)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const inputValids =
      email !== '' && firstName !== '' && lastName !== '' && tel !== ''

    if (inputValids) {
      const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        tel: tel
      }

      dispatch(register(data))
      navigate('/')
    }
  }

  const removeContact = () => {
    if (id) dispatch(remove(id))
    navigate('/')
  }

  return (
    <Style.FormContainer onSubmit={handleSubmit}>
      <Style.FormInputsControls>
        <div>
          <InputGroup
            id="firstname"
            label="Nome"
            type="text"
            value={contactInfos?.firstName ? contactInfos.firstName : firstName}
            onchange={(e) => setFistName(e.currentTarget.value)}
          />
          <InputGroup
            id="lastname"
            label="Sobrenome"
            type="text"
            value={contactInfos?.lastName ? contactInfos.lastName : lastName}
            onchange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>

        <div>
          <InputGroup
            id="tel"
            label="Telefone"
            type="tel"
            value={contactInfos?.tel ? contactInfos.tel : tel}
            onchange={(e) => setTel(e.currentTarget.value)}
          />
          <InputGroup
            id="email"
            label="Email"
            type="email"
            value={contactInfos?.email ? contactInfos.email : email}
            onchange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
      </Style.FormInputsControls>

      <Style.FormButtonsControls>
        {id && (
          <Button.Circle type="button" padding="1.6rem" onclick={removeContact}>
            <ButtonIcon icon={trashIcom} />
          </Button.Circle>
        )}

        <Button.Secondary padding="1.2rem 2.4rem" type="submit">
          <Button.Label label="SALVAR" />
        </Button.Secondary>
      </Style.FormButtonsControls>
    </Style.FormContainer>
  )
}

export default Form
