import '@testing-library/jest-dom'

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { Button } from '..'

describe('<Button />', () => {
  afterEach(() => cleanup())
  it('should render primary buttton with label correctly', () => {
    const { container } = render(
      <Button.Primary padding="2rem" type="button" title="Click me">
        <Button.Label label="Primary" />
      </Button.Primary>
    )

    expect(screen.getByText(/primary/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render primary button with label and icon correctly', () => {
    const { container } = render(
      <Button.Primary padding="2rem" type="button" title="Click me">
        <Button.Label label="Primary with label and icon" />
        <Button.Icon icon="/img.png" alt="icon" />
      </Button.Primary>
    )

    expect(screen.getByText(/primary with label and icon/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render secondary button with label correctly', () => {
    const { container } = render(
      <Button.Secondary padding="2rem" type="button" title="Click me">
        <Button.Label label="Secondary with label" />
      </Button.Secondary>
    )

    expect(screen.getByText(/secondary/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Secondary button with icon correctly', () => {
    const { container } = render(
      <Button.Secondary padding="2rem" type="button" title="Click me">
        <Button.Icon icon="/img.png" alt="icon" />
      </Button.Secondary>
    )

    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render circle button with icon correctly', () => {
    const { container } = render(
      <Button.Circle padding="2rem" type="button" title="Click me">
        <Button.Icon icon="/img.png" alt="icon" />
      </Button.Circle>
    )

    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render circle button with label correctly', () => {
    const { container } = render(
      <Button.Circle padding="2rem" type="button" title="Click me">
        <Button.Label label="Circle with label" />
      </Button.Circle>
    )

    expect(screen.getByText(/circle/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
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
