import { useSelector } from 'react-redux'
import Contact from '../Contact'
import { ListContactsContainer, ParagraphEmpty } from './styles'
import { RootState } from '../../store'
import { TContact } from '../../types/Contact'

const ListContacts = () => {
  const { items } = useSelector((state: RootState) => state.contact)
  return (
    <>
      {items.length > 0 ? (
        <ListContactsContainer>
          {items.map((contact: TContact) => (
            <li key={contact.id}>
              <Contact
                email={contact.email}
                id={contact.id}
                // image={contact.image}
                firstName={contact.firstName}
                lastName={contact.lastName}
                tel={contact.tel}
              />
            </li>
          ))}
        </ListContactsContainer>
      ) : (
        <ParagraphEmpty>
          Sua agenda está vazia, adicione novos contatos!
        </ParagraphEmpty>
      )}
    </>
  )
}

export default ListContacts
