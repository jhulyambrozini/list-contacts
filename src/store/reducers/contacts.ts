import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TContact } from '../../types/Contact'

type ContactsState = {
  items: TContact[]
}
const initialState: ContactsState = {
  items: []
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<TContact>) => {
      state.items.push({ ...action.payload })
    },

    remove: (state, action: PayloadAction<string>) => {
      state.items = [...state.items.filter((c) => c.id !== action.payload)]
    },

    edit: (state, action: PayloadAction<TContact>) => {
      const indexOfContact = state.items.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexOfContact >= 0) {
        state.items[indexOfContact] = action.payload
      }
    },

    sort: (state) => {
      state.items.sort((a, b) => {
        if (a.firstName.toLocaleLowerCase() > b.firstName.toLocaleLowerCase()) {
          return 1
        }
        if (a.firstName.toLocaleLowerCase() < b.firstName.toLocaleLowerCase()) {
          return -1
        }
        return 0
      })
    }
  }
})

export const { register, edit, remove, sort } = contactSlice.actions
export default contactSlice.reducer
