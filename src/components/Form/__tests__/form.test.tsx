import '@testing-library/jest-dom'
import 'vitest-canvas-mock'

import userEvent from '@testing-library/user-event'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Form from '..'
import { renderWithProvider } from '../../../utils/tests-redux'

const renderComponentEdit = () => {
  const { store, container } = renderWithProvider(
    <MemoryRouter>
      <Form id="1" />
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
            }
          ]
        }
      }
    }
  )
  return { store, container }
}

describe('<Form />', () => {
  it('should only render the save button on the newContact page', () => {
    const { container } = renderWithProvider(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )

    expect(screen.getAllByRole('button').length).toEqual(1)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should fill out the form correctly and register a new contact', async () => {
    const { store } = renderWithProvider(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )

    const inputFirstName = screen.getByRole('textbox', {
      name: 'Nome'
    })
    const inputLastName = screen.getByRole('textbox', {
      name: /sobrenome/i
    })
    const inputPhone = screen.getByRole('textbox', {
      name: /telefone/i
    })
    const inputEmail = screen.getByRole('textbox', {
      name: /email/i
    })

    const inputImage = screen.getByTitle('Adicionar foto')

    const file = new File(['(image)'], 'foto.png', {
      type: 'image/png'
    })

    fireEvent.change(inputFirstName, { target: { value: 'kamilly' } })
    fireEvent.change(inputLastName, { target: { value: 'silva' } })
    fireEvent.change(inputEmail, { target: { value: 'exemple@gmail.com' } })
    fireEvent.change(inputPhone, { target: { value: '0000-0000' } })
    userEvent.upload(inputImage, file)

    const registerForm = screen.getByTestId('form')

    await waitFor(() => {
      fireEvent.submit(registerForm)
    })

    await waitFor(() => {
      expect(window.location.pathname).toBe('/')
    })

    await waitFor(() => {
      expect(store.getState().contact.items.length).toEqual(1)
    })
  })

  it('should render the edit form when receiving an id props', () => {
    const { container } = renderComponentEdit()

    const fullName = screen.getByText('Kamilly Silva')
    expect(fullName).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should update the contact edit when you click the save button', async () => {
    const { store } = renderComponentEdit()

    const inputFirstName = screen.getByRole('textbox', {
      name: 'Nome'
    })
    fireEvent.change(inputFirstName, { target: { value: 'kamilla' } })

    const saveButton = screen.getByRole('button', { name: /salvar/i })

    await waitFor(() => {
      fireEvent.click(saveButton)
    })

    await waitFor(() => {
      expect(store.getState().contact.items[0].firstName).toBe('kamilla')
    })
  })

  it('should delete contact when clicking yes on confirmation pop up', async () => {
    const { store } = renderComponentEdit()

    const deleteButton = screen.getByRole('button', { name: /excluir/i })

    await waitFor(() => {
      userEvent.click(deleteButton)
    })

    await waitFor(() => {
      userEvent.click(
        screen.getByRole('button', {
          name: /sim/i
        })
      )
    })

    await waitFor(() => {
      expect(store.getState().contact.items.length).toEqual(0)
    })
  })
})
