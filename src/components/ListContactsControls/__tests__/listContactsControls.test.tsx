import { MemoryRouter } from 'react-router-dom'
import ListContactsControls from '..'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProvider } from '../../../utils/tests-redux'
import '@testing-library/jest-dom'
import { vi } from 'vitest'

const renderComponent = () => {
  const { container } = renderWithProvider(
    <MemoryRouter>
      <ListContactsControls />
    </MemoryRouter>,
    {
      preloadedState: {
        contact: {
          items: [
            {
              email: 'exemple@gmail.com',
              id: '1',
              image: '/img.png',
              firstName: 'Kamilly',
              lastName: 'Silva',
              tel: '11 99999-9999'
            },
            {
              email: 'exemple@gmail.co',
              id: '2',
              image: '/img.png',
              firstName: 'Alis',
              lastName: 'Silva',
              tel: '11 99999-8888'
            }
          ]
        }
      }
    }
  )

  return { container }
}

describe('<ListContactsControls />', () => {
  it('deve renderizar botão de orderna conatato somente quando items for maior que 0', () => {
    const { container } = renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /ordem alfabetica/i
    })

    expect(sortButton).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
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
