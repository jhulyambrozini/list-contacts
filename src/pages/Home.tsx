import Header from '../components/Header'
import ListContacts from '../components/ListContacts'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <ListContacts />
      </main>
    </div>
  )
}

export default Home
