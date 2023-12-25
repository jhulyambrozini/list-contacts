import React, { ComponentType } from 'react'
import type { Preview } from '@storybook/react'
import { Provider } from 'react-redux'
import GlobalStyle from '../src/styles'
import { configStore } from '../src/store'
import { BrowserRouter as Router } from 'react-router-dom'

const store = configStore()

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
        <Router>
          <GlobalStyle />
          <Story />
        </Router>
      </Provider>
    )
  ]
}

export default preview
