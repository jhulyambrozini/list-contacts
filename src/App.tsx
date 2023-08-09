import { Provider } from "react-redux"

import Header from "./containers/Header/Header"
import Main from "./containers/Main/Main"

import GlobalStyle from "./styles"
import store from "./store"

export type ContactProps = {
  id: number
  name: string
  tel: string
  email: string
}

function App() {
  return(
    <Provider store={store}>
      <div className="container">
        <GlobalStyle />
        <Header />
        <Main />
      </div>
    </Provider>
  )
}

export default App
