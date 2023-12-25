import { TContact } from '../../types/Contact'
import editIcon from '../../assets/edit-icon.svg'
import * as Style from './styles'

const Contact = ({ image, name, tel, email }: TContact) => {
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
      <Style.ButtonEdit>
        <img src={editIcon} alt="" />
      </Style.ButtonEdit>
    </Style.ContactContainer>
  )
}

export default Contact
