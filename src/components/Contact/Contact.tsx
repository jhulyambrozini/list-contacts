import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

import * as Styles from "./styles"
import Close from '../../assets/close.svg'
import Trash from '../../assets/trash.svg'
import Pen from '../../assets/pen.svg'
import CheckMark from '../../assets/checkmark.svg'

import { ContactProps } from "../../App"
import { edit, remove } from "../../store/reducers/contacts"

const Contact = ({name, tel, email, id}: ContactProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [nameState, setName] = useState('')
  const [emailState, setEmail] = useState('')
  const [telState, setTel] = useState('')

  useEffect(() => {
    if(name.length || tel.length || email.length ) {
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
    const exitingItems = emailState !== email || telState !== tel

    if (exitingItems) {
      dispatch(
        edit({
          email: emailState,
          id,
          name: nameState,
          tel: telState,
        })
      );
    } else if (emailState === email && telState === tel) {
      // Inputs haven't been changed
      setIsEditing(false);
    } else {
      alert("Não é permitido contatos com mesmo número e/ou email");
    }
    setIsEditing(false);
  };

  return (
    <Styles.ContactStyle>
      {isEditing && <span><em> Editando:</em></span>}
      <Styles.InputList maxLength={16} type="text" value={nameState} onChange={e => setName(e.target.value)} disabled={!isEditing}/>
      <Styles.InputList minLength={8} min={0} type="number" value={telState} onChange={e => setTel(e.target.value)} disabled={!isEditing}/>
      <Styles.InputList value={emailState} type="email" onChange={e => setEmail(e.target.value)} disabled={!isEditing}/>
      <Styles.Actions>
        {isEditing ? (
          <>
            <Styles.ButtonDelCancel onClick={cancelEdition}> <img src={Close} alt="Icon de x, para fechar edição." /> </Styles.ButtonDelCancel>
            <Styles.ButtonSave onClick={saveChanges}><img src={CheckMark} alt="Icon concluido." /></Styles.ButtonSave>
          </>
          ) :
          (
          <>
            <Styles.ButtonDelCancel onClick={() => dispatch(remove(id))}><img src={Trash} alt="Icon de lixeira" /></Styles.ButtonDelCancel>
            <Styles.ButtonEdit onClick={() => setIsEditing(true)}><img src={Pen} alt="Icon de lápis." /></Styles.ButtonEdit>
          </>
          )
        }
      </Styles.Actions>
    </Styles.ContactStyle>
  )
}

export default Contact
