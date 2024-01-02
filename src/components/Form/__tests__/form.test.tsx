import { fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'vitest-canvas-mock'
import { renderWithProvider } from '../../../utils/tests-redux'
import { MemoryRouter } from 'react-router-dom'
import Form from '..'
import userEvent from '@testing-library/user-event'

describe('<Form />', () => {
  it('deve renderizar apenas o botão de salvar na pagina de newContact', () => {
    const { container } = renderWithProvider(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )

    expect(screen.getAllByRole('button').length).toEqual(1)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve preencher o formulario corretamente e registrar novo contato', async () => {
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

  it('deve renderizar o formulario de edição quando receber um id props ', () => {
    renderWithProvider(
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

    const fullName = screen.getByText('Kamilly Silva')
    expect(fullName).toBeInTheDocument()
  })
  it('deve atualizar a edição do contato quando clicar no botão salvar', async () => {
    const { store } = renderWithProvider(
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

  it('deve excluir contato quando clicar em sim no pop up de confirmação', async () => {
    const { store } = renderWithProvider(
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

    const excludeButton = screen.getByRole('button', { name: /excluir/i })

    await waitFor(() => {
      userEvent.click(excludeButton)
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
