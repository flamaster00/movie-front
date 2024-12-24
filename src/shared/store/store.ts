import { configureStore } from '@reduxjs/toolkit'
import { backendApi } from '../api/backendAPI'
import { kinopoiskApi } from '../api/kinopoiskApi'

export const makeStore = () => {
    return configureStore({
        reducer: {
          [backendApi.reducerPath]: backendApi.reducer,
          [kinopoiskApi.reducerPath]: kinopoiskApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(backendApi.middleware).concat(kinopoiskApi.middleware),
      })
  }

  export type AppStore = ReturnType<typeof makeStore>
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']

