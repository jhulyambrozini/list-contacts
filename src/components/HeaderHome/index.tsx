import lineDeco from '../../assets/line-deco.svg'
import * as Style from './styles'

const HeaderHome = () => (
  <Style.HeaderContainer>
    <h1>
      <span>AGENDA</span> DE
      <br />
      CONTATOS
    </h1>
    <Style.LineDeco src={lineDeco} alt="" />
  </Style.HeaderContainer>
)

export default HeaderHome
