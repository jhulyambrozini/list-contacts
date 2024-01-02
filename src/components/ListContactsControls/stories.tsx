import { Meta } from '@storybook/react'
import mockStore from '../../mocks/redux-store'
import { Provider } from 'react-redux'
import ListContactsControls from '.'

const meta = {
  title: 'components/ListContactsControls',
  component: ListContactsControls,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ListContactsControls>

export default meta

export const WithListEmpty = () => {
  const store = mockStore({
    contact: {
      items: []
    },
    popUp: {
      isPopupOpen: false
    }
  })
  return (
    <Provider store={store}>
      <ListContactsControls />
    </Provider>
  )
}

export const WithListItems = () => {
  const store = mockStore({
    contact: {
      items: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          tel: '9999-99999',
          image: 'https://placehold.co/90x90/030020/png'
        }
      ]
    },
    popUp: {
      isPopupOpen: false
    }
  })
  return (
    <Provider store={store}>
      <ListContactsControls />
    </Provider>
  )
}
