import { MovieByKeywordPreview } from "./ui/MovieByKeywordPreview/MovieByKeywordPreview";
import { MoviePreview } from "./ui/MoviePreview/MoviePreview";
import { useGetMovieByIdQuery, useGetMovieByKeywordQuery } from './api/movieQuery'

import type { TKPMovie, TMovieId, TMoviesInCollection, TMovieByKeyword, TSearchByKeywordResponse } from "./model/types";

export {
    MoviePreview,
    MovieByKeywordPreview,
    useGetMovieByIdQuery,
    useGetMovieByKeywordQuery,
    TMovieByKeyword, 
    TSearchByKeywordResponse,
    TKPMovie, TMovieId, TMoviesInCollection
}
