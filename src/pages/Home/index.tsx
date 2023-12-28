import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome'
import ListContacts from '../../components/ListContacts'
import ListContactsControls from '../../components/ListContactsControls'

import { HomeContainer } from './styles'

const Home = () => {
  return (
    <HomeContainer className="container">
      <HeaderHome />
      <main>
        <ListContactsControls />
        <ListContacts />
      </main>
      <Footer />
    </HomeContainer>
  )
}

export default Home
