import '@testing-library/jest-dom'

import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ListContacts from '..'

import { renderWithProvider } from '../../../utils/tests-redux'

describe('<ListContacts />', () => {
  it('should render a paragraph if the list is empty', () => {
    const { container } = renderWithProvider(
      <MemoryRouter>
        <ListContacts />
      </MemoryRouter>
    )
    expect(
      screen.getByText(/sua agenda está vazia, adicione novos contatos!/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the item in the list when it has one in the store', async () => {
    const { container } = renderWithProvider(
      <MemoryRouter>
        <ListContacts />
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

    expect(
      screen.getByRole('heading', { name: /kamilly silva/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /alis silva/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
