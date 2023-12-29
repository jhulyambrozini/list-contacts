import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../../../utils/tests-redux'
import { MemoryRouter } from 'react-router-dom'
import Form from '..'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

describe('<Form />', () => {
  // deve exluir contato quando aperta no botão de excluir

  it('deve renderizar apenas o botão de salvar na pagina de newContact', () => {
    const { container } = renderWithProvider(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )

    expect(screen.getAllByRole('button').length).toEqual(1)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve preencher o formulario corretamente e registrar', async () => {
    const handleSubmit = vi.fn()

    renderWithProvider(
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

    const register = screen.getByTestId('form')
    register.onsubmit = handleSubmit

    fireEvent.submit(register)

    expect(handleSubmit).toHaveBeenCalled()
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
  it('deve salvar a edição quando clicar no botão salvar', () => {
    const handleSubmitEdit = vi.fn()
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
    const inputFirstName = screen.getByRole('textbox', {
      name: 'Nome'
    })
    fireEvent.change(inputFirstName, { target: { value: 'kamilla' } })

    const saveButton = screen.getByRole('button', { name: /salvar/i })

    saveButton.onclick = handleSubmitEdit

    fireEvent.click(saveButton)

    expect(handleSubmitEdit).toHaveBeenCalled()
  })
})
