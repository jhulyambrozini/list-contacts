import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import RoutesProvider from './routes'
import { store, persistor } from './store'
import Footer from './components/Footer/Footer'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesProvider />
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
