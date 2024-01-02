import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../Button'

import { PopUpConfirmContainer } from './styles'

import { closePopup } from '../../store/reducers/popup'
import { remove } from '../../store/reducers/contacts'
import { RootState } from '../../store'

export type PopupConfirmProps = {
  id: string
}

const PopupConfirm = ({ id }: PopupConfirmProps) => {
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
        <PopUpConfirmContainer
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
              title="Confirmar excluir contato"
              type="button"
              onclick={removeContact}
            >
              <Button.Label label="SIM" />
            </Button.Secondary>
          </div>
        </PopUpConfirmContainer>
      )}
    </>
  )
}

export default PopupConfirm
