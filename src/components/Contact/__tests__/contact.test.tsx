import '@testing-library/jest-dom'

import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import { TContact } from '../../../types/Contact'
import Contact from '..'

const propsContact: TContact = {
  email: 'exemple@gmail.com',
  id: '1',
  image: '/img.png',
  firstName: 'Kamilly',
  lastName: 'Silva',
  tel: '11 99999-9999'
}

const mockUseNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any
  return {
    ...actual,
    useNavigate: () => mockUseNavigate
  }
})

describe('<Contact />', () => {
  afterEach(() => vi.clearAllMocks())

  it('should render received props correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Contact {...propsContact} />
      </MemoryRouter>
    )
    const name = screen.getByRole('heading', { name: /Kamilly Silva/i })
    const tel = screen.getByText(propsContact.tel)
    const email = screen.getByText(propsContact.email)
    const image = screen.getByRole('img', { name: /Kamilly Silva/i })

    expect(name).toBeInTheDocument()
    expect(tel).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(image).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should call useNavigate with the right URL when clicking the edit button', async () => {
    render(
      <MemoryRouter>
        <Contact {...propsContact} />
      </MemoryRouter>
    )

    const buttonEdit = screen.getByRole('button', { name: /Icone de editar/i })

    await waitFor(() => userEvent.click(buttonEdit))

    expect(mockUseNavigate.mock.calls[0][0]).toBe(`/contact/${propsContact.id}`)
  })
})
