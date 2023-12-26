import { ChangeEventHandler } from 'react'
import * as Style from './styles'

type InputGroupProps = {
  id: string
  type: string
  label: string
  value?: string
  onchange: ChangeEventHandler<HTMLInputElement>
}

const InputGroup = ({ id, type, label, value, onchange }: InputGroupProps) => {
  return (
    <Style.InputGroupContainer>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onchange} />
    </Style.InputGroupContainer>
  )
}

export default InputGroup
