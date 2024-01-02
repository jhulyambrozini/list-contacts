import { Meta } from '@storybook/react'
import InputGroup, { InputGroupProps } from '.'

const meta = {
  title: 'components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },

  args: {
    id: 'email',
    type: 'email',
    label: 'EMAIL'
  },
  argTypes: {
    erroMessage: { control: { disable: true } },
    isSuccess: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    onChange: { control: { disable: true } }
  }
} satisfies Meta<typeof InputGroup>

export default meta

export const Template = (args: InputGroupProps) => {
  return <InputGroup {...args} />
}

export const WithError = (args: InputGroupProps) => {
  return (
    <InputGroup
      {...args}
      erroMessage="Email inválido"
      value="kamillygmail.com"
    />
  )
}

export const WithSuccess = (args: InputGroupProps) => {
  return <InputGroup {...args} isSuccess value="kamilly@gmail.com" />
}
