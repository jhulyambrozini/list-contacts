import { MemoryRouter } from 'react-router-dom'
import ListContactsControls from '..'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithProvider } from '../../../utils/tests-redux'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

const renderComponent = () => {
  const { container, store } = renderWithProvider(
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
              email: 'exemple@gmail.com.br',
              id: '2',
              image: '/img.png',
              firstName: 'alis',
              lastName: 'Silva',
              tel: '11 99999-0000'
            }
          ]
        }
      }
    }
  )

  return { container, store }
}

const mockUseNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any
  return {
    ...actual,
    useNavigate: () => mockUseNavigate
  }
})

describe('<ListContactsControls />', () => {
  afterEach(() => vi.clearAllMocks())

  it('deve renderizar botão de orderna conatato somente quando items for maior que 0', () => {
    const { container } = renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /ordem alfabetica/i
    })

    expect(sortButton).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve chamar uma função quando clicar em ordenar', async () => {
    const { store } = renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /ordem alfabetica/i
    })

    expect(store.getState().contact.items[0].firstName).toBe('Kamilly')

    await waitFor(() => fireEvent.click(sortButton))

    await waitFor(() => {
      expect(store.getState().contact.items[0].firstName).toBe('alis')
    })
  })

  it('deve chamar usenavigate com a url vcerta quando cliacr em adicionar', async () => {
    renderComponent()

    const addContactButton = screen.getByRole('button', {
      name: /adicionar/i
    })

    await waitFor(() => userEvent.click(addContactButton))

    expect(mockUseNavigate.mock.calls[0][0]).toBe('/new-contact')
  })
})
