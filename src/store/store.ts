// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import { api } from './api'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,  // Redux Toolkit Query no store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),  // middleware do RTK Query
})

export default store
