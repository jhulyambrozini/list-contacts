import { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import InputGroup from '../InputGroup'
import { Button } from '../Button'
import PopupConfirm from '../PopupComfirm'

import * as Style from './styles'
import trashIcom from '../../assets/trash-icon.svg'
import addPhotoIcon from '../../assets/addPhoto-icon.svg'

import { ValuesForm } from '../../types/Form'
import { TContact, TContactWithoutId } from '../../types/Contact'

import { generateRandomImage, validateImageFormat } from '../../utils/image'
import { getMessageError, getSuccess } from '../../utils/validate-form'

import { edit, register } from '../../store/reducers/contacts'
import { RootState } from '../../store'
import { openPopup } from '../../store/reducers/popup'

export type FormProps = {
  id?: string
}

const Form = ({ id }: FormProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items } = useSelector((state: RootState) => state.contact)
  const contactInfos = items.find((i: TContact) => i.id === id)

  const [image, setImage] = useState<string | undefined>(
    contactInfos?.image || ''
  )

  const form = useFormik<ValuesForm>({
    initialValues: {
      firstName: contactInfos?.firstName || '',
      lastName: contactInfos?.lastName || '',
      email: contactInfos?.email || '',
      tel: contactInfos?.tel || ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('O campo é obrigatório'),
      lastName: Yup.string().required('O campo é obrigatório'),
      tel: Yup.string().required('O campo é obrigatório'),
      email: Yup.string()
        .email('Digite um email válido')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      if (image) {
        const data = {
          ...values,
          image
        }
        await registerData(data)
      } else {
        const randomImage = generateRandomImage(form.values.firstName, 100, 100)
        const data = {
          ...values,
          image: randomImage
        }
        await registerData(data)
      }
    }
  })

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    const file = input.files?.[0]

    if (file && validateImageFormat(file)) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }

      reader.readAsDataURL(file)
    } else {
      setImage('')
    }
  }

  const updateContact = async (values: TContactWithoutId) => {
    if (id) {
      const data = {
        ...values,
        id
      }
      await dispatch(edit(data))
      navigate('/')
    }
  }

  const registerNewContact = async (values: TContactWithoutId) => {
    if (isContactExist()) {
      alert(
        `Este telefone: ${form.values.tel} ou email: ${form.values.email} já está na agenda`
      )
    } else {
      const data = {
        ...values,
        id: uuidv4()
      }
      await dispatch(register(data))
      navigate('/')
    }
  }

  const registerData = async (values: TContactWithoutId) => {
    if (id) {
      await updateContact(values)
    } else {
      await registerNewContact(values)
    }
  }

  const isContactExist = () => {
    for (let contact of items) {
      const emailExists = contact.email === form.values.email
      const telExists = contact.tel === form.values.tel

      if (emailExists || telExists) return true
    }

    return false
  }

  const getFullName = () => {
    if (contactInfos?.firstName && contactInfos.lastName) {
      return `${contactInfos.firstName} ${contactInfos.lastName}`
    } else if (form.values.firstName !== '' && form.values.lastName !== '') {
      return `${form.values.firstName} ${form.values.lastName}`
    }
    return 'Insira um nome'
  }

  return (
    <Style.FormContainer onSubmit={form.handleSubmit} data-testid="form">
      <Style.PhotoContainer>
        <Style.InputAddPhotoContainer aria-label="Input image">
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/png, image/jpeg"
            multiple={false}
            title="Adicionar foto"
          />
          {image ? (
            <Style.Photo src={image} alt="Imagem de perfil" />
          ) : (
            <img src={addPhotoIcon} alt="Icone de uma câmera" />
          )}
        </Style.InputAddPhotoContainer>
        <Style.FullName>{getFullName()}</Style.FullName>
      </Style.PhotoContainer>

      <Style.FormInputsControls>
        <div>
          <InputGroup
            id="firstName"
            label="Nome"
            type="text"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.firstName}
            erroMessage={getMessageError(
              'firstName',
              form,
              form.errors.firstName
            )}
            isSuccess={getSuccess('firstName', form)}
          />
          <InputGroup
            id="lastName"
            label="Sobrenome"
            type="text"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.lastName}
            erroMessage={getMessageError(
              'lastName',
              form,
              form.errors.lastName
            )}
            isSuccess={getSuccess('lastName', form)}
          />
        </div>

        <div>
          <InputGroup
            id="tel"
            label="Telefone"
            type="tel"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.tel}
            erroMessage={getMessageError('tel', form, form.errors.tel)}
            isSuccess={getSuccess('tel', form)}
          />
          <InputGroup
            id="email"
            label="Email"
            type="email"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.email}
            erroMessage={getMessageError('email', form, form.errors.email)}
            isSuccess={getSuccess('email', form)}
          />
        </div>
      </Style.FormInputsControls>

      <Style.FormButtonsControls>
        {id && (
          <Button.Circle
            type="button"
            padding="1.6rem"
            onclick={() => dispatch(openPopup())}
            title="Excluir contato"
          >
            <Button.Icon alt="Icone de lixeira (excluir)" icon={trashIcom} />
          </Button.Circle>
        )}

        <Button.Secondary
          padding="1.2rem 2.4rem"
          type="submit"
          title="Salvar contato"
        >
          <Button.Label label="SALVAR" />
        </Button.Secondary>
      </Style.FormButtonsControls>

      {id && <PopupConfirm id={id} />}
    </Style.FormContainer>
  )
}

export default Form
