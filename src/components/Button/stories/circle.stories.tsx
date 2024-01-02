import type { Meta, StoryObj } from '@storybook/react'
import editIcon from '../../../assets/edit-icon.svg'

import { Button } from '..'

const meta = {
  title: 'components/Button/Circle',
  component: Button.Circle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button.Circle>

// eslint-disable-next-line react-refresh/only-export-components
export default meta
type Story = StoryObj<typeof Button.Circle>

export const WithLabel: Story = {
  args: {
    padding: '1rem 2rem',
    title: 'Click me',
    type: 'button',
    children: <Button.Label label="Circle" />
  }
}

export const WithIcon: Story = {
  args: {
    padding: '1rem 2rem',
    title: 'Click me',
    type: 'button',
    children: <Button.Icon icon={editIcon} />
  }
}
