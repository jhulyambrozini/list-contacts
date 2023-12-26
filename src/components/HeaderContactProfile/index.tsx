import backIcon from '../../assets/back-icon.svg'
import addPhotoIcon from '../../assets/addPhoto-icon.svg'
import { Link } from 'react-router-dom'
import * as Style from './styles'

const HeaderContactProfile = () => {
  return (
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
  )
}

export default HeaderContactProfile
