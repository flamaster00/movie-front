import { createApi, EndpointDefinitions, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { backendBaseUrl } from "../config/backend"
import { LOCALSTORAGE_USER_KEY } from "../consts/consts"

export const backendApi = createApi({
    reducerPath: 'backendApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${backendBaseUrl}/api`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (): EndpointDefinitions => ({} as EndpointDefinitions),
})