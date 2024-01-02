import moreIcon from '../../assets/more-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import * as Style from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { sort } from '../../store/reducers/contacts'

const ListContactsControls = () => {
  const { items } = useSelector((state: RootState) => state.contact)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Style.ListControls>
      <Button.Primary
        type="button"
        padding="1rem 2rem"
        onclick={() => navigate('/new-contact')}
        title="Adicionar contato"
      >
        <Button.Icon alt="Sinal de mais" icon={moreIcon} />
        <Button.Label label="ADICIONAR" />
      </Button.Primary>

      {items.length > 0 && (
        <Button.Primary
          type="button"
          padding=".8rem"
          onclick={() => dispatch(sort())}
          title="ordem alfabetica"
        >
          <Button.Icon alt="Icon de A-Z" icon={sortIcon} />
        </Button.Primary>
      )}
    </Style.ListControls>
  )
}

export default ListContactsControls
