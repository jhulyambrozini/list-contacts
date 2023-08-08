import { ChangeEvent, FormEvent, useState } from "react"
import { Button, Field, FormStyle } from "./styles"
import { useDispatch } from "react-redux"
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
      dispatch(
        register({
          name,
          email,
          tel
        })
      )
    }
    console.log('submited', e)

  }

  return (
    <FormStyle onSubmit={createContact}>
        <Field type="text" placeholder="Nome" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
        <Field type="number" placeholder="2799999-9999" value={tel} onChange={(e: ChangeEvent<HTMLInputElement>) => setTel(e.target.value)}/>
        <Field type="email" placeholder="exemple@email.com" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        <Button type="submit">SALVAR</Button>
    </FormStyle>
  )
}

export default Form
