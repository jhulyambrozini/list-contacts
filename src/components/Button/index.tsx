import { MouseEventHandler, ReactNode } from 'react'
import ButtonCircle from './ButtonCircle'
import ButtonIcon from './ButtonIcon'
import ButtonLabel from './ButtonLabel'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

export type ButtonProps = {
  children: ReactNode
  padding: string
  type: 'button' | 'submit'
  onclick?: MouseEventHandler<HTMLButtonElement>
  title?: string
}

export const Button = {
  Circle: ButtonCircle,
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
  Label: ButtonLabel,
  Icon: ButtonIcon
}
