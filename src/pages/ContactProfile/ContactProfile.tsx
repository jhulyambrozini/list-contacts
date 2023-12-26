import { useParams } from 'react-router-dom'
import Form from '../../components/Form'
import * as Style from './styles'
import backIcon from '../../assets/back-icon.svg'
import { Link } from 'react-router-dom'

const ContactProfile = () => {
  const { id } = useParams()

  return (
    <Style.ContactProfileContainer className="container">
      <Style.Background>
        <Link to="/" title="ir para Home">
          <img src={backIcon} alt="Seta de voltar" />
        </Link>
      </Style.Background>
      <main>{id ? <Form id={Number(id)} /> : <Form />}</main>
    </Style.ContactProfileContainer>
  )
}

export default ContactProfile
