import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'

import editIcon from '../../assets/edit-icon.svg'
import * as Style from './styles'

import { TContact } from '../../types/Contact'

const Contact = ({ firstName, lastName, tel, email, id, image }: TContact) => {
  const navigate = useNavigate()

  const fullName = `${firstName} ${lastName}`

  return (
    <Style.ContactContainer>
      <Style.Image>
        <div className="line-deco"></div>
        <img src={image} alt={fullName} />
      </Style.Image>
      <Style.Infos aria-label="contact info">
        <h2>{fullName}</h2>
        <span>{tel}</span>
        <span>{email}</span>
      </Style.Infos>
      <Button.Circle
        type="button"
        padding="1.6rem"
        title="Editar contato"
        onclick={() => navigate(`/contact/${id}`)}
      >
        <Button.Icon alt="Icone de editar" icon={editIcon} />
      </Button.Circle>
    </Style.ContactContainer>
  )
}

export default Contact
