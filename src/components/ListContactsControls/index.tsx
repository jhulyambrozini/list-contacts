import moreIcon from '../../assets/more-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import * as Style from './styles'

const ListContactsControls = () => {
  const navigate = useNavigate()
  function handleClickMore() {
    return
  }
  const goToForm = () => {
    console.log('aaaaaaaaaaaaa')
    navigate('/contact/1')
  }
  return (
    <Style.ListControls>
      <Button.Primary padding="1rem 2rem" onclick={goToForm}>
        <Button.Icon icon={moreIcon} />
        <Button.Label label="ADICIONAR" />
      </Button.Primary>

      <Button.Primary padding=".8rem" onclick={handleClickMore}>
        <Button.Icon icon={sortIcon} />
      </Button.Primary>
    </Style.ListControls>
  )
}

export default ListContactsControls
