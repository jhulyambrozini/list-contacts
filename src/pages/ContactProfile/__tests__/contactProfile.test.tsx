import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../../../utils/tests-redux'
import { MemoryRouter } from 'react-router-dom'
import ContactProfile from '../ContactProfile'
import userEvent from '@testing-library/user-event'

describe('<ContactProfile />', () => {
  it('deve ir para home quando clicar no link', () => {
    renderWithProvider(
      <MemoryRouter>
        <ContactProfile />
      </MemoryRouter>
    )

    const linkToHome = screen.getByRole('link', { name: /Seta de voltar/i })

    userEvent.click(linkToHome)

    expect(global.window.location.pathname).toEqual('/')
  })
  it('deve renderizar o overlay quando isopenpopup for true', () => {
    renderWithProvider(
      <MemoryRouter>
        <ContactProfile />
      </MemoryRouter>,
      {
        preloadedState: {
          popUp: {
            isPopupOpen: true
          }
        }
      }
    )
    expect(screen.getByRole('overlay-container')).toBeInTheDocument()
  })
})
