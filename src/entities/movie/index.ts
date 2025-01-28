import { MovieByKeywordPreview } from "./ui/MovieByKeywordPreview/MovieByKeywordPreview";
import { MoviePreview } from "./ui/MoviePreview/MoviePreview";
import { 
    useGetMovieByIdQuery, 
    useGetMovieByKeywordQuery, 
    useGetMoviesInCollectionQuery 
} from './api/movieQuery'

import type { 
    TKPMovie, TMovieId, 
    TMoviesInCollection, TMovieByKeyword, 
    TSearchByKeywordResponse, TMovieInDB,
    TGetMoviesByCollectionIdResponse
} from "./model/types";

export {
    // ui
    MoviePreview,
    MovieByKeywordPreview,
    // query
    useGetMovieByIdQuery,
    useGetMovieByKeywordQuery,
    useGetMoviesInCollectionQuery,
    // types
    TMovieByKeyword,
    TSearchByKeywordResponse,
    TKPMovie, TMovieId, TMoviesInCollection,
    TMovieInDB, TGetMoviesByCollectionIdResponse
}
