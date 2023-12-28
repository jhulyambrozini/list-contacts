import { ReactNode } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { render } from '@testing-library/react'

const renderWithRouter = (component: ReactNode) => {
  let navigate: any
  const Wrapper = () => {
    navigate = useNavigate()
    return component
  }

  return {
    ...render(
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    ),
    navigate
  }
}

export default renderWithRouter
