export type TContact = {
  id: string
  firstName: string
  lastName: string
  tel: string
  email: string
  image: string
}

export type TContactWithoutId = Omit<TContact, 'id'>
