import '@testing-library/jest-dom'
import {
  cleanup,
  fireEvent,
  getByRole,
  getByText,
  render,
  screen
} from '@testing-library/react'
import { Button, ButtonProps } from '..'
import ButtonIcon from '../ButtonIcon'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('<Button />', () => {
  afterEach(() => cleanup())
  it('deve renderizar primary buttton com label corretamente', () => {
    render(
      <Button.Primary padding="2rem" type="button" title="Click me">
        <Button.Label label="Primary" />
      </Button.Primary>
    )

    expect(screen.getByText(/primary/i)).toBeInTheDocument()
  })

  it('deve renderizar primary buttton com label e icon corretamente', () => {
    render(
      <Button.Primary padding="2rem" type="button" title="Click me">
        <Button.Label label="Primary with label and icon" />
        <ButtonIcon icon="/img.png" alt="icon" />
      </Button.Primary>
    )

    expect(screen.getByText(/primary with label and icon/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()
  })

  it('deve renderizar seconadry buttton com label corretamente', () => {
    render(
      <Button.Secondary padding="2rem" type="button" title="Click me">
        <Button.Label label="Secondary with label" />
      </Button.Secondary>
    )

    expect(screen.getByText(/secondary/i)).toBeInTheDocument()
  })

  it('deve renderizar Secondary buttton com icon corretamente', () => {
    render(
      <Button.Secondary padding="2rem" type="button" title="Click me">
        <ButtonIcon icon="/img.png" alt="icon" />
      </Button.Secondary>
    )

    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()
  })

  it('deve renderizar circle button com icon corretamente', () => {
    render(
      <Button.Circle padding="2rem" type="button" title="Click me">
        <ButtonIcon icon="/img.png" alt="icon" />
      </Button.Circle>
    )

    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()
  })

  it('deve renderizar circle button com label corretamente', () => {
    render(
      <Button.Circle padding="2rem" type="button" title="Click me">
        <Button.Label label="Circle with label" />
      </Button.Circle>
    )

    expect(screen.getByText(/circle/i)).toBeInTheDocument()
  })

  it('should calls onClick handler when button is clicked', () => {
    const handleClick = vi.fn()
    render(
      <Button.Primary
        padding="2rem"
        type="button"
        title="Click me"
        onclick={handleClick}
      >
        <Button.Label label="button" />
      </Button.Primary>
    )

    fireEvent.click(screen.getByText('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
