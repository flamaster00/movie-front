import { backendApi } from "@/shared/api/backendAPI";

const collectionsApi = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCollections: build.query({
            query: () => ({
                url: '/api/collections'
            }),
        }),
    }),
});

export const {useGetAllCollectionsQuery} = collectionsApi

// import { backendBaseUrl } from "@/shared/config/backend";
// import { LOCALSTORAGE_USER_KEY } from "@/shared/consts/consts";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

// export const backendApi = createApi({
//     reducerPath: 'backendApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${backendBaseUrl}`,
//         prepareHeaders: (headers) => {
//             const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';
//             if (token) {
//                 headers.set('Authorization', token)
//             }
//             return headers
//         }
//     }),
//     endpoints: (builder) => ({}),
// })