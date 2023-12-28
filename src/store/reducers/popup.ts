import { createSlice } from '@reduxjs/toolkit'

type PopUpState = {
  isPopupOpen: boolean
}
const initialState: PopUpState = {
  isPopupOpen: false
}

const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isPopupOpen = true
    },
    closePopup: (state) => {
      state.isPopupOpen = false
    }
  }
})

export const { openPopup, closePopup } = popUpSlice.actions
export default popUpSlice.reducer
