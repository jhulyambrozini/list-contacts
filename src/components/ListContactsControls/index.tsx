import moreIcon from '../../assets/more-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import * as Style from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { sort } from '../../store/reducers/contacts'

const ListContactsControls = () => {
  const navigate = useNavigate()
  const { items } = useSelector((state: RootState) => state.contact)
  const dispatch = useDispatch()

  const goToForm = () => {
    navigate('/new-contact')
  }
  return (
    <Style.ListControls>
      <Button.Primary
        type="button"
        padding="1rem 2rem"
        onclick={goToForm}
        title="Adicionar contato"
      >
        <Button.Icon icon={moreIcon} />
        <Button.Label label="ADICIONAR" />
      </Button.Primary>

      {items.length > 0 && (
        <Button.Primary
          type="button"
          padding=".8rem"
          onclick={() => dispatch(sort())}
          title="ordem alfabetica"
        >
          <Button.Icon icon={sortIcon} />
        </Button.Primary>
      )}
    </Style.ListControls>
  )
}

export default ListContactsControls
