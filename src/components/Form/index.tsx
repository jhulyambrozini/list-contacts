import { ChangeEvent, FormEventHandler, useState } from 'react'
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
import addPhotoIcon from '../../assets/addPhoto-icon.svg'

type FormProps = {
  id?: number
}

const Form = ({ id }: FormProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items } = useSelector((state: RootState) => state.contact)
  const contactInfos = items.find((i: TContact) => i.id === id)

  const [firstName, setFistName] = useState(contactInfos?.firstName || '')
  const [lastName, setLastName] = useState(contactInfos?.lastName || '')
  const [email, setEmail] = useState(contactInfos?.email || '')
  const [tel, setTel] = useState(contactInfos?.tel || '')
  const [image, setImage] = useState<string | undefined>(
    contactInfos?.image || ''
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const inputValids =
      email !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      tel !== '' &&
      image &&
      image !== ''

    if (inputValids) {
      const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        tel: tel,
        image: image
      }

      dispatch(register(data))
      navigate('/')
    }
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    const file = input.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }

      reader.readAsDataURL(file)
    } else {
      setImage('')
    }
  }

  const removeContact = () => {
    if (id) dispatch(remove(id))
    navigate('/')
  }

  const getFullName = () => {
    if (contactInfos?.firstName && contactInfos.lastName) {
      return `${contactInfos.firstName} ${contactInfos.lastName}`
    }
    return 'Insira um nome'
  }

  return (
    <Style.FormContainer onSubmit={handleSubmit}>
      <Style.PhotoContainer>
        <Style.InputAddPhotoContainer>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/png, image/jpeg"
            multiple={false}
          />
          {image ? (
            <Style.Photo src={image} />
          ) : (
            <img src={addPhotoIcon} alt="Icone de uma câmera" />
          )}
        </Style.InputAddPhotoContainer>
        <Style.FullName>{getFullName()}</Style.FullName>
      </Style.PhotoContainer>

      <Style.FormInputsControls>
        <div>
          <InputGroup
            id="firstname"
            label="Nome"
            type="text"
            value={firstName}
            onchange={(e) => setFistName(e.currentTarget.value)}
          />
          <InputGroup
            id="lastname"
            label="Sobrenome"
            type="text"
            value={lastName}
            onchange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>

        <div>
          <InputGroup
            id="tel"
            label="Telefone"
            type="tel"
            value={tel}
            onchange={(e) => setTel(e.currentTarget.value)}
          />
          <InputGroup
            id="email"
            label="Email"
            type="email"
            value={email}
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
