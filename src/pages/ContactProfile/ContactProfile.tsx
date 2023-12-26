import { useParams } from 'react-router-dom'
import Form from '../../components/Form'
import HeaderContactProfile from '../../components/HeaderContactProfile'
import * as Style from './styles'

const ContactProfile = () => {
  const { id } = useParams()

  return (
    <>
      {id ? (
        <Style.ContactProfileContainer className="container">
          <HeaderContactProfile />
          <main>
            <Form id={Number(id)} />
          </main>
        </Style.ContactProfileContainer>
      ) : (
        <Style.ContactProfileContainer className="container">
          <HeaderContactProfile />
          <main>
            <Form />
          </main>
        </Style.ContactProfileContainer>
      )}
    </>
  )
}

export default ContactProfile
