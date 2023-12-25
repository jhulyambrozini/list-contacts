import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import RoutesProvider from './routes'
import { configStore } from './store'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesProvider />
      </BrowserRouter>
    </Provider>
  )
}

export default App
