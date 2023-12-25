import { Meta } from '@storybook/react'
import ListContacts from '.'

const meta = {
  title: 'components/ListContacts',
  component: ListContacts
} satisfies Meta<typeof ListContacts>

export default meta

export const Template = () => {
  return <ListContacts />
}
