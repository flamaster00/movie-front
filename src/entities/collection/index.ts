import {CollectionPreview} from './ui/CollectionPreview/CollectionPreview';


import {
    useGetAllCollectionsQuery,
    useGetCollectionByIdQuery,
} from "./api/collectionQuery";

import type { TCollection, TGetCollectionById, TGetAllCollectionsQuery } from './model/types'
import { Collection } from './ui/Collection/Collection';

export {
    // ui
    Collection,
    CollectionPreview,
    // query
    useGetAllCollectionsQuery,
    useGetCollectionByIdQuery,
    // types
    TCollection,
    TGetCollectionById,
    TGetAllCollectionsQuery
}