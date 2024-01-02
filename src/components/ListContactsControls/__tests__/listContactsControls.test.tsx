import '@testing-library/jest-dom'

import { MemoryRouter } from 'react-router-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import ListContactsControls from '..'

import { renderWithProvider } from '../../../utils/tests-redux'

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

  it('should render contact order button only when items is greater than 0', () => {
    const { container } = renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /Icon de A-Z/i
    })

    expect(sortButton).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should sort the items in the list when you click on the sort button', async () => {
    const { store } = renderComponent()

    const sortButton = screen.getByRole('button', {
      name: /Icon de A-Z/i
    })

    expect(store.getState().contact.items[0].firstName).toBe('Kamilly')

    await waitFor(() => fireEvent.click(sortButton))

    await waitFor(() => {
      expect(store.getState().contact.items[0].firstName).toBe('alis')
    })
  })

  it('should call usenavigate with the correct url when you click on add', async () => {
    renderComponent()

    const addContactButton = screen.getByRole('button', {
      name: /adicionar/i
    })

    await waitFor(() => userEvent.click(addContactButton))

    expect(mockUseNavigate.mock.calls[0][0]).toBe('/new-contact')
  })
})
