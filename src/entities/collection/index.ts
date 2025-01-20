import {CollectionPreview} from './ui/CollectionPreview/CollectionPreview';
import {Collection} from './Collection/ui/Collection';


import {
    useGetAllCollectionsQuery,
    useGetCollectionByIdQuery,
    useGetMoviesInCollectionQuery
} from "./api/collectionQuery";

import type { TCollection } from './model/types'

export {
    Collection,
    CollectionPreview,
    useGetAllCollectionsQuery,
    useGetCollectionByIdQuery,
    useGetMoviesInCollectionQuery,
    TCollection,
}