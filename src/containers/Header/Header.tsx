import Agenda from '../../assets/agenda.png'
import { HeaderStyles } from "./styles"
import { Title } from "../../styles"

const Header = () => {
  return (
    <HeaderStyles>
        <img src={Agenda} alt="emoji de um caderno amarelo com algumas páginas voando" />
        <Title>Minha agenda de contatos</Title>
    </HeaderStyles>
  )
}

export default Header
