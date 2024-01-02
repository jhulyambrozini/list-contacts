import { useSelector } from 'react-redux'

import Contact from '../Contact'

import * as Style from './styles'

import { TContact } from '../../types/Contact'
import { RootState } from '../../store'

const ListContacts = () => {
  const { items } = useSelector((state: RootState) => state.contact)

  return (
    <>
      {items.length > 0 ? (
        <Style.ListContactsContainer>
          {items.map((contact: TContact) => (
            <li key={contact.id}>
              <Contact
                email={contact.email}
                id={contact.id}
                image={contact.image}
                firstName={contact.firstName}
                lastName={contact.lastName}
                tel={contact.tel}
              />
            </li>
          ))}
        </Style.ListContactsContainer>
      ) : (
        <Style.ParagraphEmpty>
          Sua agenda está vazia, adicione novos contatos!
        </Style.ParagraphEmpty>
      )}
    </>
  )
}

export default ListContacts
