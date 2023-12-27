import { ChangeEvent, useState } from 'react'
import InputGroup from '../InputGroup'
import { Button } from '../Button'
import * as Style from './styles'
import ButtonIcon from '../Button/ButtonIcon'
import trashIcom from '../../assets/trash-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { edit, register, remove } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { TContact } from '../../types/Contact'
import addPhotoIcon from '../../assets/addPhoto-icon.svg'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { generateRandomImage, validateImageFormat } from '../../utils/image'

type FormProps = {
  id?: number
}

const Form = ({ id }: FormProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { items } = useSelector((state: RootState) => state.contact)
  const contactInfos = items.find((i: TContact) => i.id === id)

  const [image, setImage] = useState<string | undefined>(
    contactInfos?.image || ''
  )

  const form = useFormik({
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
    onSubmit: (values) => {
      if (image) {
        const data = {
          ...values,
          image
        }
        registerData(data)
      } else {
        const randomImage = generateRandomImage(form.values.firstName, 100, 100)
        const data = {
          ...values,
          image: randomImage
        }
        registerData(data)
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

  const removeContact = () => {
    if (id) dispatch(remove(id))
    navigate('/')
  }

  const registerData = (values: Omit<TContact, 'id'>) => {
    if (id) {
      const dataWithId = {
        ...values,
        id
      }
      dispatch(edit(dataWithId))
      navigate('/')
    } else {
      if (contactExist()) {
        alert(
          `Este telefone: ${form.values.tel} e email: ${form.values.email} já estão na agenad`
        )
      } else {
        dispatch(register(values))
        navigate('/')
      }
    }
  }

  const contactExist = () => {
    for (let contact of items) {
      console.log(contact)
      const emailExists = contact.email === form.values.email
      const telExists = contact.tel === form.values.tel

      if (emailExists && telExists) {
        return true
      }
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

  const getFieldStatus = (field: string) => {
    const isTouched = field in form.touched
    const isInvalid = field in form.errors
    return { isTouched, isInvalid }
  }

  const getMessageError = (field: string, message?: string) => {
    const { isTouched, isInvalid } = getFieldStatus(field)
    return isTouched && isInvalid ? message : false
  }

  const getSuccess = (field: string) => {
    const { isTouched, isInvalid } = getFieldStatus(field)
    return isTouched && !isInvalid
  }

  return (
    <Style.FormContainer onSubmit={form.handleSubmit}>
      <Style.PhotoContainer>
        <Style.InputAddPhotoContainer>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/png, image/jpeg"
            multiple={false}
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
            erroMessage={getMessageError('firstName', form.errors.firstName)}
            isSuccess={getSuccess('firstName')}
          />
          <InputGroup
            id="lastName"
            label="Sobrenome"
            type="text"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.lastName}
            erroMessage={getMessageError('lastName', form.errors.lastName)}
            isSuccess={getSuccess('lastName')}
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
            erroMessage={getMessageError('tel', form.errors.tel)}
            isSuccess={getSuccess('tel')}
          />
          <InputGroup
            id="email"
            label="Email"
            type="email"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
            value={form.values.email}
            erroMessage={getMessageError('email', form.errors.email)}
            isSuccess={getSuccess('email')}
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
