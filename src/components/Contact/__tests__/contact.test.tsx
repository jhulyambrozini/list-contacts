import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import Contact from '..'
import { TContact } from '../../../types/Contact'
import { MemoryRouter } from 'react-router-dom'
import { userEvent } from '@testing-library/user-event'

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

  it('should render correctly', () => {
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
  it('should call navigate with the right url clicking in edit button', async () => {
    render(
      <MemoryRouter>
        <Contact {...propsContact} />
      </MemoryRouter>
    )

    const buttonEdit = screen.getByRole('button', { name: /Editar contato/i })

    await waitFor(() => userEvent.click(buttonEdit))

    expect(mockUseNavigate.mock.calls[0][0]).toBe(`/contact/${propsContact.id}`)
  })
})
