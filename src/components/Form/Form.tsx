import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"

import { ButtonCreate, Field, FormGroup, FormStyle} from "./styles"
import { register } from "../../store/reducers/contacts"

const Form = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const createContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(name === '' || email === '' || tel === '') {
      alert('Preencha todos os campo')
    } else {
      dispatch(register({ name, email, tel }))
   // clean inputs
      setEmail('')
      setName('')
      setTel('')
    }
  }

  return (
    <FormStyle onSubmit={createContact}>
      <FormGroup>
        <label htmlFor="name">Nome:</label>
        <Field
        id="name"
        maxLength={16}
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="tel">Telefone:</label>
        <Field
        id="tel"
        maxLength={8}
        min={0}
        type="number"
        placeholder="2799999999"
        value={tel}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTel(e.target.value)}/>
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email:</label>
        <Field
        id="email"
        type="email"
        placeholder="exemple@email.com"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
      </FormGroup>

      <ButtonCreate type="submit">SALVAR</ButtonCreate>
    </FormStyle>
  )
}

export default Form
