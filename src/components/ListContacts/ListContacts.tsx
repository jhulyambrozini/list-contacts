import { useSelector } from "react-redux"
import { Container, Title } from "../../styles"
import Contact from "../Contact/Contact"
import { ListContactStyles } from "./styles"
import { RootReducer } from "../../store"

const ListContacts = () => {
  const {items} = useSelector((state: RootReducer) => state.contact)
  return (
    <Container>
      <Title as='h3'>Contatos</Title>
      <ListContactStyles>
      {items.map(c => (
        <li key={c.id}>
          <Contact name={c.name} email={c.email} tel={c.tel} id={c.id}/>
        </li>
      ))}
      </ListContactStyles>
    </Container>
  )
}

export default ListContacts
