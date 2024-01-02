import '@testing-library/jest-dom'

import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import ContactProfile from '..'
import { renderWithProvider } from '../../../utils/tests-redux'

describe('<ContactProfile />', () => {
  it('should go to home when you click on the link', () => {
    renderWithProvider(
      <MemoryRouter>
        <ContactProfile />
      </MemoryRouter>
    )

    const linkToHome = screen.getByRole('link', { name: /Seta de voltar/i })

    userEvent.click(linkToHome)

    expect(global.window.location.pathname).toEqual('/')
  })
  it('should render overlay when isPopupOpen is true', () => {
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
