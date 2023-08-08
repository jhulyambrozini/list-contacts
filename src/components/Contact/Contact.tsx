import { useDispatch } from "react-redux"
import { ContactProps } from "../../App"
import { Button } from "../Form/styles"
import { Actions, ButtonDel, ContactStyle } from "./styles"
import { useState } from "react"
import { remove } from "../../store/reducers/contacts"

const Contact = ({name, tel, email, id}: ContactProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <ContactStyle>
      <p>{name}</p>
      <p>{tel}</p>
      <p>{email}</p>
      <Actions>
      <ButtonDel onClick={() => dispatch(remove(id))}>X</ButtonDel>
      <Button>edit</Button>
      </Actions>
    </ContactStyle>
  )
}

export default Contact
