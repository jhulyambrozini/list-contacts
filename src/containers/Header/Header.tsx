import { HeaderStyles } from "./styles"
import Agenda from '../../assets/agenda.png'
import { Title } from "../../styles"

const Header = () => {
  return (
    <HeaderStyles>
        <img src={Agenda} alt="emoji de um caderno amarelo" />
        <Title>Minha agenda de contatos online</Title>
    </HeaderStyles>
  )
}

export default Header
