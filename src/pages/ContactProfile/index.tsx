import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Form from '../../components/Form'
import Footer from '../../components/Footer/Footer'

import * as Style from './styles'
import backIcon from '../../assets/back-icon.svg'

import { RootState } from '../../store'
import { closePopup } from '../../store/reducers/popup'

const ContactProfile = () => {
  const { id } = useParams()
  const { isPopupOpen } = useSelector((state: RootState) => state.popUp)
  const dispatch = useDispatch()

  return (
    <>
      <Style.ContactProfileContainer className="container">
        <Style.Background aria-label="background">
          <Link to="/" title="ir para Home">
            <img src={backIcon} alt="Seta de voltar" />
          </Link>
        </Style.Background>
        <main>{id ? <Form id={id} /> : <Form />}</main>
        <Footer />
      </Style.ContactProfileContainer>

      {isPopupOpen && (
        <Style.Overlay
          role="overlay-container"
          aria-description="Background escuro"
          onClick={() => dispatch(closePopup())}
        />
      )}
    </>
  )
}

export default ContactProfile
