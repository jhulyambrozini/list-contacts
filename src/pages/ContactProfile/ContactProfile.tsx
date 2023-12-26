import Form from '../../components/Form'
import HeaderContactProfile from '../../components/HeaderContactProfile'
import * as Style from './styles'

const ContactProfile = () => {
  return (
    <Style.ContactProfileContainer className="container">
      <HeaderContactProfile />
      <main>
        <Form />
      </main>
    </Style.ContactProfileContainer>
  )
}

export default ContactProfile
