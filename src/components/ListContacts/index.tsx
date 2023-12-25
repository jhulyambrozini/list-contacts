import Contact from '../Contact'
import { ListContactsContainer } from './styles'

const ListContacts = () => {
  return (
    <ListContactsContainer>
      <li>
        <Contact
          email="exemple@gmail.com"
          id={11}
          image="https://placehold.co/90x90/030020/png"
          name="Kamilly Silva"
          tel="99 99999-9999"
        />
      </li>

      <li>
        <Contact
          email="exemple@gmail.com"
          id={11}
          image="https://placehold.co/90x90/030020/png"
          name="Kamilly Silva"
          tel="99 99999-9999"
        />
      </li>
      <li>
        <Contact
          email="exemple@gmail.com"
          id={11}
          image="https://placehold.co/90x90/030020/png"
          name="Kamilly Silva"
          tel="99 99999-9999"
        />
      </li>
      <li>
        <Contact
          email="exemple@gmail.com"
          id={11}
          image="https://placehold.co/90x90/030020/png"
          name="Kamilly Silva"
          tel="99 99999-9999"
        />
      </li>
      <li>
        <Contact
          email="exemple@gmail.co"
          id={11}
          image="https://placehold.co/90x90/030020/png"
          name="Kamilly Silva"
          tel="99 99999-9999"
        />
      </li>
      <li>
        <Contact
          email="exemple@gmail.com"
          id={11}
          image="https://placehold.co/90x90/030020/png"
          name="Kamilly Silva Santos carmello"
          tel="99 99999-9999"
        />
      </li>
    </ListContactsContainer>
  )
}

export default ListContacts
