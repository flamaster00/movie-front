import { userReducer } from '@/entities/user'
import { backendApi } from '@/shared/api/backendAPI'
import { kinopoiskApi } from '@/shared/api/kinopoiskApi'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
    return configureStore({
        reducer: {
          user: userReducer,
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

