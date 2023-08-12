import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import * as Styles from "./styles"
import { ContactProps } from "../../App"
import { edit, remove } from "../../store/reducers/contacts"
import { RootReducer } from "../../store"

const Contact = ({name, tel, email, id}: ContactProps) => {
  const {items} = useSelector((state: RootReducer) => state.contact)
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [nameState, setName] = useState('')
  const [emailState, setEmail] = useState('')
  const [telState, setTel] = useState('')

  useEffect(() => {
    if(name.length > 0 || tel.length > 0 || email.length > 0) {
      setName(name)
      setEmail(email)
      setTel(tel)
    }
  }, [name, email, tel])

  const cancelEdition = () => {
    setIsEditing(false)
    setName(name)
    setEmail(email)
    setTel(tel)
  }

  const saveChanges = () => {
    const existingEmail = items.find(c => c.email === emailState)
    const existingTel = items.find(c => c.tel === telState)

    if(existingEmail || existingTel){
      alert('Não é permetido contatos com mesmo número e/ou email')
      return
    }
      dispatch(edit({
        email: emailState,
        id,
        name: nameState,
        tel: telState,
        }))
      setIsEditing(false)
  }

  return (
    <Styles.ContactStyle>
      {isEditing && <span><em> Editando:</em></span>}
      <Styles.InputList maxLength={16} type="text" value={nameState} onChange={e => setName(e.target.value)} disabled={!isEditing}/>
      <Styles.InputList minLength={8} min={0} type="number" value={telState} onChange={e => setTel(e.target.value)} disabled={!isEditing}/>
      <Styles.InputList value={emailState} type="email" onChange={e => setEmail(e.target.value)} disabled={!isEditing}/>
      <Styles.Actions>
        {isEditing ? (
          <>
            <Styles.ButtonDelCancel onClick={cancelEdition}>cancelar</Styles.ButtonDelCancel>
            <Styles.ButtonSave onClick={saveChanges}>salvar</Styles.ButtonSave>
          </>
          ) :
          (
          <>
            <Styles.ButtonDelCancel onClick={() => dispatch(remove(id))}>Apagar</Styles.ButtonDelCancel>
            <Styles.ButtonEdit onClick={() => setIsEditing(true)}>Editar</Styles.ButtonEdit>
          </>
          )
        }
      </Styles.Actions>
    </Styles.ContactStyle>
  )
}

export default Contact
