import { MovieByKeywordPreview } from "./ui/MovieByKeywordPreview/MovieByKeywordPreview";
import { MoviePreview } from "./ui/MoviePreview/MoviePreview";
import { useGetMovieByIdQuery, useGetMovieByKeywordQuery } from './api/movieQuery'

import type { TMovie, TMovieByKeyword, TSearchByKeywordResponse } from "./model/types";

export {
    MoviePreview,
    MovieByKeywordPreview,
    useGetMovieByIdQuery,
    useGetMovieByKeywordQuery,
    TMovie, 
    TMovieByKeyword, 
    TSearchByKeywordResponse
}
