import { Meta } from '@storybook/react'
import { Provider } from 'react-redux'

import ListContacts from '.'

import mockStore from '../../mocks/redux-store'

const meta = {
  title: 'components/ListContacts',
  component: ListContacts,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ListContacts>

export default meta

export const Empty = () => {
  const store = mockStore({
    contact: {
      items: []
    }
  })
  return (
    <Provider store={store}>
      <ListContacts />
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
        },
        {
          id: '2',
          firstName: 'Luiza',
          lastName: 'Doe',
          email: 'Luiza@example.com',
          tel: '9999-99999',
          image: 'https://placehold.co/90x90/030020/png'
        },
        {
          id: '3',
          firstName: 'Antonia',
          lastName: 'Doe',
          email: 'Antonia@example.com',
          tel: '9999-99999',
          image: 'https://placehold.co/90x90/030020/png'
        }
      ]
    }
  })

  return (
    <Provider store={store}>
      <ListContacts />
    </Provider>
  )
}
