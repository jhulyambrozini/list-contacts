import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { persistStore } from 'redux-persist'

import contactReducer from './reducers/contacts'

const rootReducer = combineReducers({
  contact: contactReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

function configStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState
  })
}

export const store = configStore()
export let persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer> // esse é pra tipar o useSelect
export type AppStore = ReturnType<typeof configStore>
