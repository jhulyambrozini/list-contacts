import { BrowserRouter } from 'react-router-dom'
import ListContactsControls from '..'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProvider } from '../../../utils/tests-redux'
import '@testing-library/jest-dom'
import { vi } from 'vitest'

const renderComponent = () => {
  renderWithProvider(
    <BrowserRouter>
      <ListContactsControls />
    </BrowserRouter>,
    {
      preloadedState: {
        contact: {
          items: [
            {
              email: 'exemple@gmail.com',
              id: '1',
              image: '',
              firstName: 'Kamilly',
              lastName: 'Silva',
              tel: '11 99999-9999'
            }
          ]
        }
      }
    }
  )
}

describe('<ListContactsControls />', () => {
  // deve renderizar botão de orderna conatato somente quando items for maior que 0

  // deve chamar uma função quando clicar em ordenar

  // deve chamar uma função quando clicar em adicionar
  it('deve renderizar botão de orderna conatato somente quando items for maior que 0', () => {
    renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /ordem alfabetica/i
    })

    expect(sortButton).toBeInTheDocument()
  })

  it('deve chamar uma função quando clicar em ordenar', () => {
    const handleClick = vi.fn()
    renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /ordem alfabetica/i
    })

    sortButton.onclick = handleClick

    fireEvent.click(sortButton)

    expect(handleClick).toHaveBeenCalled()
  })

  it('deve chamar uma função quando clicar em adicionar', () => {
    const handleClick = vi.fn()
    renderComponent()

    const addContactButton = screen.getByRole('button', {
      name: /ADICIONAR/i
    })

    addContactButton.onclick = handleClick

    fireEvent.click(addContactButton)

    expect(handleClick).toHaveBeenCalled()
  })
})
