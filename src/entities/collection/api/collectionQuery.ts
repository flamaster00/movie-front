import { backendApi } from "@/shared/api/backendAPI";
import { TCollection, TGetAllCollectionsQuery, TGetCollectionById } from "../model/types";

const collectionApi = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCollections: build.query<TGetAllCollectionsQuery, void>({
            query: () => ({
                url: '/collections'
            }),
        }),

        getCollectionById: build.query<TCollection, TCollection['id']>({
            query: (id) => ({
                url: `/collections/${id}`
            })
        }),
    }),
    overrideExisting: true
});

export const { useGetAllCollectionsQuery, useGetCollectionByIdQuery } = collectionApi