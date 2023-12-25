import { ChangeEventHandler, LegacyRef } from 'react'
import * as Style from './styles'

type InputGroupProps = {
  id: string
  type: string
  onchange: ChangeEventHandler<HTMLInputElement>
  ref: LegacyRef<HTMLInputElement> | undefined
  label: string
}

const InputGroup = ({ id, onchange, ref, type, label }: InputGroupProps) => {
  return (
    <Style.InputGroupContainer>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={onchange} ref={ref} />
    </Style.InputGroupContainer>
  )
}

export default InputGroup
