import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '..'
import editIcon from '../../../assets/edit-icon.svg'

const meta = {
  title: 'components/Button/Secondary',
  component: Button.Secondary,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button.Secondary>

// eslint-disable-next-line react-refresh/only-export-components
export default meta
type Story = StoryObj<typeof Button.Secondary>

export const WithLabel: Story = {
  args: {
    padding: '1rem 2rem',
    title: 'Click me',
    type: 'button',
    children: <Button.Label label="Secondary" />
  }
}

export const WithIcon: Story = {
  args: {
    padding: '1rem 2rem',
    title: 'Click me',
    type: 'button',
    children: <Button.Icon alt="icon" icon={editIcon} />
  }
}
