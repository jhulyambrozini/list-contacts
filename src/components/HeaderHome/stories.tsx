import type { Meta } from '@storybook/react'

import HeaderHome from '.'

const meta = {
  title: 'components/Header',
  component: HeaderHome
} satisfies Meta<typeof HeaderHome>

export default meta

export const Template = () => {
  return <HeaderHome />
}
