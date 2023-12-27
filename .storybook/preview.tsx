import React, { ComponentType } from 'react'
import type { Preview } from '@storybook/react'
import { Provider } from 'react-redux'
import GlobalStyle from '../src/styles'
import { store, persistor } from '../src/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story: ComponentType) => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <GlobalStyle />
            <Story />
          </Router>
        </PersistGate>
      </Provider>
    )
  ]
}

export default preview
