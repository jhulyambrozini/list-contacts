import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import RoutesProvider from './routes'
import { store, persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesProvider />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
