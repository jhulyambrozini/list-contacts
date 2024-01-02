import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import InputGroup from '..'

const propsInputGroup = {
  id: 'name',
  type: 'text',
  label: 'NOME'
}

describe('<InputGroup />', () => {
  it('should render correctly without error or success', () => {
    const { container } = render(<InputGroup {...propsInputGroup} />)

    const label = screen.getByText('NOME')
    const input = screen.getByRole('textbox', { name: /NOME/i })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should correctly receive the change event', () => {
    render(<InputGroup {...propsInputGroup} />)

    const input = screen.getByRole('textbox', { name: /NOME/i })

    fireEvent.change(input, {
      target: {
        value: 'adicioanndo um texto'
      }
    })
    expect(input).toHaveValue('adicioanndo um texto')
  })

  it('should render with error when getting an error message', () => {
    const { container } = render(
      <InputGroup {...propsInputGroup} erroMessage="campo obrigatório" />
    )

    const spanErro = screen.getByText('campo obrigatório')
    const input = screen.getByRole('textbox', { name: /NOME/i })

    expect(input.className).toBe('error')
    expect(spanErro).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render in success state when isSucess is true', () => {
    const { container } = render(<InputGroup {...propsInputGroup} isSuccess />)

    const input = screen.getByRole('textbox', { name: /NOME/i })
    expect(input.className).toBe('success')

    expect(container.firstChild).toMatchSnapshot()
  })
})
