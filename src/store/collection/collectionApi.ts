import { TCollection } from "@/shared/types/CollectionTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";

export const collectionApi = createApi({
    reducerPath: 'api/',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        getAllCollections: builder.query<TCollection[], string>({
            query: (name) => `localhost:5000${name}`
        })
    })
})