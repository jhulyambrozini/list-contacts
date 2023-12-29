import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Button } from '../Button'
import { closePopup } from '../../store/reducers/popup'
import { remove } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'
import * as Style from './styles'

const PopupConfirm = ({ id }: { id: string }) => {
  const { isPopupOpen } = useSelector((state: RootState) => state.popUp)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeContact = () => {
    dispatch(remove(id))
    dispatch(closePopup())
    navigate('/')
  }

  return (
    <>
      {isPopupOpen && (
        <>
          <Style.PopUpConfirmContainer
            aria-label="Excluir contato"
            aria-description="Pop up para confirmação da exclusão do contato"
            role="dialog"
          >
            <p>Deseja excluir?</p>
            <div>
              <Button.Secondary
                padding="1.2rem 2.4rem"
                title="Não excluir contato"
                type="button"
                onclick={() => dispatch(closePopup())}
              >
                <Button.Label label="NÃO" />
              </Button.Secondary>

              <Button.Secondary
                padding="1.2rem 2.4rem"
                title="Excluir contato"
                type="button"
                onclick={removeContact}
              >
                <Button.Label label="SIM" />
              </Button.Secondary>
            </div>
          </Style.PopUpConfirmContainer>
        </>
      )}
    </>
  )
}

export default PopupConfirm
