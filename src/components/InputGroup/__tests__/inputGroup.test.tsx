import InputGroup from '..'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

const propsInputGroup = {
  id: 'name',
  type: 'text',
  label: 'NOME'
}

describe('<InputGroup />', () => {
  it('deve renderizar corretamente sem erro ou sucesso', () => {
    const { container } = render(<InputGroup {...propsInputGroup} />)

    const label = screen.getByText('NOME')
    const input = screen.getByRole('textbox', { name: /NOME/i })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve renderizar com erro quando receber uma mensagem de erro', () => {
    const { container } = render(
      <InputGroup {...propsInputGroup} erroMessage="campo obrigatório" />
    )

    const spanErro = screen.getByText('campo obrigatório')
    const input = screen.getByRole('textbox', { name: /NOME/i })

    expect(input.className).toBe('error')
    expect(spanErro).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it(' deve renderizar no estado sucesso quando isSucess for true', () => {
    const { container } = render(<InputGroup {...propsInputGroup} isSuccess />)

    const input = screen.getByRole('textbox', { name: /NOME/i })
    expect(input.className).toBe('success')
    expect(container.firstChild).toMatchSnapshot()
  })

  it(' deve receber corretamente o evento de change', () => {
    render(<InputGroup {...propsInputGroup} />)

    const input = screen.getByRole('textbox', { name: /NOME/i })

    fireEvent.change(input, {
      target: {
        value: 'adicioanndo um texto'
      }
    })
    expect(input).toHaveValue('adicioanndo um texto')
  })
})
