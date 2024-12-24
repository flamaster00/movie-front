import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { kinopoiskBaseUrl } from "../config/kinopoisk";

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${kinopoiskBaseUrl}`,
        prepareHeaders: (headers) => {
            const token = process.env.KINOPOISK_TOKEN

            if (token) {
                headers.set('X-API-KEY', token)
                headers.set('Content-Type', 'application/json')
            }

            return headers
        }
    }),
    endpoints: (builder) => ({}),
})