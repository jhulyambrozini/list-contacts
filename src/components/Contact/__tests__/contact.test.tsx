import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Contact from '..'
import { TContact } from '../../../types/Contact'
import { MemoryRouter } from 'react-router-dom'

const propsContact: TContact = {
  email: 'exemple@gmail.com',
  id: 1,
  image: '',
  firstName: 'Kamilly',
  lastName: 'Silva',
  tel: '11 99999-9999'
}

describe('<Contact />', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Contact {...propsContact} />
      </MemoryRouter>
    )
    const name = screen.getByRole('heading', { name: /kamilly/i })
    expect(name).toBeInTheDocument()
  })
  it('should call a function when clicking in edit button', () => {})
})
