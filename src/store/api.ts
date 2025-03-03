import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Game } from '../App'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos',
    }),
  }),
})

export const { useGetJogosQuery } = api
