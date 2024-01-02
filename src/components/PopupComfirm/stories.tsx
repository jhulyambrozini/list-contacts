import { Provider } from 'react-redux'
import { Meta } from '@storybook/react'

import PopupConfirm, { PopupConfirmProps } from '.'

import mockStore from '../../mocks/redux-store'

const meta = {
  title: 'components/PopupConfirm',
  component: PopupConfirm,
  parameters: {
    layout: 'centered'
  },
  args: {
    id: '1'
  }
} satisfies Meta<typeof PopupConfirm>

export default meta

export const Template = (args: PopupConfirmProps) => {
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
      <PopupConfirm {...args} />
    </Provider>
  )
}
