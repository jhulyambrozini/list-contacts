import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
import contactReducer from "./reducers/contacts"

const rootReducer = combineReducers({
  contact: contactReducer
})

export function configStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore> // esse é pra tipar o useSelect
