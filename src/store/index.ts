import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import contactReducer from './reducers/contacts'
import popUpReducer from './reducers/popup'

const rootReducer = combineReducers({
  contact: contactReducer,
  popUp: popUpReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }),
    preloadedState
  })
}

export const store = configStore()
export let persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer> // esse é pra tipar o useSelect
export type AppStore = ReturnType<typeof configStore>
