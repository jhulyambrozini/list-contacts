import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import RoutesProvider from './routes'
import { configStore } from './store'
import Footer from './components/Footer/Footer'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesProvider />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
