import { Meta } from '@storybook/react'
import Form, { FormProps } from '.'
import mockStore from '../../mocks/redux-store'
import { Provider } from 'react-redux'

const meta = {
  title: 'components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    id: '1'
  }
} satisfies Meta<typeof Form>

export default meta

export const NewContact = () => {
  return <Form />
}

export const EditContact = (args: FormProps) => {
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
      <Form {...args} />
    </Provider>
  )
}
