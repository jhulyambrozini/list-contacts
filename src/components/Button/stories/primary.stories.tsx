import type { Meta, StoryObj } from '@storybook/react'
import editIcon from '../../../assets/edit-icon.svg'

import { Button } from '..'

const meta = {
  title: 'components/Button/Primary',
  component: Button.Primary,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button.Primary>

// eslint-disable-next-line react-refresh/only-export-components
export default meta
type Story = StoryObj<typeof Button.Primary>

export const WithLabel: Story = {
  args: {
    padding: '1rem 2rem',
    title: 'Click me',
    type: 'button',
    children: <Button.Label label="Primary" />
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

export const WithIconAndLabel: Story = {
  args: {
    padding: '1rem 2rem',
    title: 'Click me',
    type: 'button',
    children: (
      <>
        <Button.Icon icon={editIcon} />
        <Button.Label label="Primary" />
      </>
    )
  }
}
