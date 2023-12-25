import { Meta } from '@storybook/react'
import Contact from '.'
import { TContact } from '../../types/Contact'

const meta = {
  title: 'components/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    email: 'exemple@gmail.com',
    id: 1,
    image: 'https://placehold.co/90x90/030020/png',
    name: 'Kamilly Silva',
    tel: '27 99999-9999'
  }
} satisfies Meta<typeof Contact>

export default meta

export const Template = (args: TContact) => {
  return <Contact {...args} />
}
