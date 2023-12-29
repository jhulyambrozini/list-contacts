import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProvider } from '../../../utils/tests-redux'
import PopupConfirm from '..'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

const renderComponent = () => {
  const { store, container } = renderWithProvider(
    <MemoryRouter>
      <PopupConfirm id="1" />
    </MemoryRouter>,
    {
      preloadedState: {
        popUp: {
          isPopupOpen: true
        },
        contact: {
          items: [
            {
              email: 'exemple@gmail.com',
              id: '1',
              image: '/img.png',
              firstName: 'Kamilly',
              lastName: 'Silva',
              tel: '11 99999-9999'
            }
          ]
        }
      }
    }
  )
  return { store, container }
}

const mockUseNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any
  return {
    ...actual,
    useNavigate: () => mockUseNavigate
  }
})

describe('<PopupConfirm />', () => {
  it('deve renderizar corretamente quando ispopupopn for true', () => {
    const { container } = renderComponent()

    expect(
      screen.getByRole('dialog', { name: /excluir contato/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve fechar popup quando cliacr em não', () => {
    const { store } = renderComponent()
    const noButton = screen.getByRole('button', { name: /não/i })

    fireEvent.click(noButton)

    const state = store.getState()

    expect(state.popUp.isPopupOpen).toBeFalsy()
  })

  it('deve chamar a função removeContact quando cliacr em sim', () => {
    const { store } = renderComponent()
    const yesButton = screen.getByRole('button', { name: /sim/i })

    fireEvent.click(yesButton)

    const state = store.getState()
    expect(state.popUp.isPopupOpen).toBeFalsy()
    expect(state.contact.items.length).toEqual(0)
    expect(mockUseNavigate.mock.calls[0][0]).toBe('/')
  })
})
