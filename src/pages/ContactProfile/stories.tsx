import { Provider } from 'react-redux'
import { Meta } from '@storybook/react'

import ContactProfile from '.'

import mockStore from '../../mocks/redux-store'

const meta = {
  title: 'pages/ContactProfile',
  component: ContactProfile,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ContactProfile>

export default meta

export const Template = () => {
  return <ContactProfile />
}

export const WithPopupOpen = () => {
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
      isPopupOpen: true
    }
  })

  return (
    <Provider store={store}>
      <ContactProfile />
    </Provider>
  )
}
