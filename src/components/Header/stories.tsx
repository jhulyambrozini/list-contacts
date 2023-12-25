import type { Meta } from '@storybook/react'

import Header from '.'

const meta = {
  title: 'components/Header',
  component: Header
} satisfies Meta<typeof Header>

export default meta

export const Template = () => {
  return <Header />
}
