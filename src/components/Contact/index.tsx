import { TContact } from '../../types/Contact'
import editIcon from '../../assets/edit-icon.svg'
import * as Style from './styles'
import { Button } from '../Button'
import ButtonIcon from '../Button/ButtonIcon'

const Contact = ({ image, name, tel, email }: TContact) => {
  function handleClick() {
    return true
  }
  return (
    <Style.ContactContainer>
      <Style.Image>
        <div className="line-deco"></div>
        <img src={image} alt={name} />
      </Style.Image>
      <Style.Infos>
        <h2>{name}</h2>
        <span>{tel}</span>
        <span>{email}</span>
      </Style.Infos>
      <Button.Circle padding="1.6rem" onclick={handleClick}>
        <ButtonIcon icon={editIcon} />
      </Button.Circle>
    </Style.ContactContainer>
  )
}

export default Contact
