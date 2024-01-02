import { ChangeEventHandler, FocusEventHandler } from 'react'
import * as Style from './styles'

export type InputGroupProps = {
  id: string
  type: string
  label: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  erroMessage?: string | false | undefined
  isSuccess?: boolean
}

const InputGroup = ({
  id,
  type,
  label,
  value,
  onChange,
  onBlur,
  erroMessage,
  isSuccess
}: InputGroupProps) => (
  <Style.InputGroupContainer>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={(isSuccess ? 'success' : '') || (erroMessage ? 'error' : '')}
    />
    <span>{erroMessage}</span>
  </Style.InputGroupContainer>
)

export default InputGroup
