import { TContact } from '../../types/Contact'
import editIcon from '../../assets/edit-icon.svg'
import * as Style from './styles'
import { Button } from '../Button'
import ButtonIcon from '../Button/ButtonIcon'
import { useNavigate } from 'react-router-dom'

const Contact = ({ firstName, lastName, tel, email, id }: TContact) => {
  const navigate = useNavigate()

  return (
    <Style.ContactContainer>
      <Style.Image>
        <div className="line-deco"></div>
        {/* <img src={image} alt={name} /> */}
      </Style.Image>
      <Style.Infos>
        <h2>{firstName + ' ' + lastName}</h2>
        <span>{tel}</span>
        <span>{email}</span>
      </Style.Infos>
      <Button.Circle
        type="button"
        padding="1.6rem"
        onclick={() => navigate(`/contact/${id}`)}
      >
        <ButtonIcon icon={editIcon} />
      </Button.Circle>
    </Style.ContactContainer>
  )
}

export default Contact
