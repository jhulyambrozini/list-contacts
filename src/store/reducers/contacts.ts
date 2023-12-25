import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../types/Contact'

type ContactsState = {
  items: Contact[]
}
const initialState: ContactsState = {
  items: []
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existingNumber = state.items.find(
        (c) => c.tel === action.payload.tel
      )
      const existingEmail = state.items.find(
        (c) => c.email === action.payload.email
      )

      if (existingNumber || existingEmail) {
        alert('Este contato já existe na agenda')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }

        state.items.push(newContact)
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = [...state.items.filter((c) => c.id !== action.payload)]
    },

    edit: (state, action: PayloadAction<Contact>) => {
      const indexOfContact = state.items.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexOfContact >= 0) {
        state.items[indexOfContact] = action.payload
      }
    }
  }
})

export const { register, edit, remove } = contactSlice.actions
export default contactSlice.reducer
