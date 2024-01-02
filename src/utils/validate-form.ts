import { FormikProps } from 'formik'
import { ValuesForm } from '../types/Form'

export const getFieldStatus = (
  field: string,
  form: FormikProps<ValuesForm>
) => {
  const isTouched = field in form.touched
  const isInvalid = field in form.errors
  return { isTouched, isInvalid }
}

export const getMessageError = (
  field: string,
  form: FormikProps<ValuesForm>,
  message?: string
) => {
  const { isTouched, isInvalid } = getFieldStatus(field, form)
  return isTouched && isInvalid ? message : false
}

export const getSuccess = (field: string, form: FormikProps<ValuesForm>) => {
  const { isTouched, isInvalid } = getFieldStatus(field, form)
  return isTouched && !isInvalid
}
