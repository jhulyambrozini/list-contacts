import lineDeco from '../../assets/line-deco.svg'
import { HeaderContainer, LineDeco } from './styles'

const HeaderHome = () => (
  <HeaderContainer>
    <h1>
      <span>AGENDA</span> DE
      <br />
      CONTATOS
    </h1>
    <LineDeco src={lineDeco} alt="" />
  </HeaderContainer>
)

export default HeaderHome

