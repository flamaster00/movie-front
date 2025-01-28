import { backendApi } from "@/shared/api/backendAPI";
import { TGetAllCollectionsQuery, TGetCollectionById } from "../model/types";

const collectionApi = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCollections: build.query<TGetAllCollectionsQuery, null>({
            query: () => ({
                url: '/api/collections'
            }),
        }),

        getCollectionById: build.query<TGetCollectionById, string>({
            query: (id) => ({
                url: `/api/collections/${id}`
            })
        }),

        
    }),
});

export const {useGetAllCollectionsQuery, useGetCollectionByIdQuery} = collectionApi