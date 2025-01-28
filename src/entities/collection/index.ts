import {CollectionPreview} from './ui/CollectionPreview/CollectionPreview';


import {
    useGetAllCollectionsQuery,
    useGetCollectionByIdQuery,
    useGetMoviesInCollectionQuery
} from "./api/collectionQuery";

import type { TCollection, TNewCollection, TGetCollectionById, TGetAllCollectionsQuery } from './model/types'
import { Collection } from './ui/Collection/Collection';

export {
    Collection,
    CollectionPreview,
    useGetAllCollectionsQuery,
    useGetCollectionByIdQuery,
    useGetMoviesInCollectionQuery,
    TCollection,
    TNewCollection, 
    TGetCollectionById,
    TGetAllCollectionsQuery
}