import { Button } from '../../components/Button'
import ButtonLabel from '../../components/Button/ButtonLabel'
import Header from '../../components/Header'
import ListContacts from '../../components/ListContacts'
import moreIcon from '../../assets/more-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import { HomeContainer, ListControls } from './styles'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  function handleClickMore() {
    return
  }
  const goToForm = () => {
    console.log('aaaaaaaaaaaaa')
    navigate('/contact/1')
  }
  return (
    <HomeContainer>
      <Header />
      <main>
        <ListControls>
          <Button.Primary padding="1rem 2rem" onclick={goToForm}>
            <Button.Icon icon={moreIcon} />
            <ButtonLabel label="ADICIONAR" />
          </Button.Primary>

          <Button.Primary padding=".8rem" onclick={handleClickMore}>
            <Button.Icon icon={sortIcon} />
          </Button.Primary>
        </ListControls>
        <ListContacts />
      </main>
    </HomeContainer>
  )
}

export default Home
