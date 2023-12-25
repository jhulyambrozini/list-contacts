import backIcon from '../../assets/back-icon.svg'
import addPhotoIcon from '../../assets/addPhoto-icon.svg'
import { Link } from 'react-router-dom'

import * as Style from './styles'
import Form from '../../components/Form'

const ContactProfile = () => {
  return (
    <div className="container">
      <Style.Header>
        <Link to="/" title="ir para Home">
          <img src={backIcon} alt="Seta de voltar" />
        </Link>
        <Style.ButtonAddPhotoContainer>
          <button>
            <img src={addPhotoIcon} alt="Icone de uma câmera" />
          </button>
          <span>Enter a name</span>
        </Style.ButtonAddPhotoContainer>
      </Style.Header>
      <main>
        <Form />
      </main>
    </div>
  )
}

export default ContactProfile
