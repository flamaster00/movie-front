import { kinopoiskApi } from "@/shared/api/kinopoiskApi";
import { TKPMovie, TMovieByKeyword, TSearchByKeywordResponse } from "../model/types";

const movieApi = kinopoiskApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieById: build.query<TKPMovie, number>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}`
            }),
        }),
        getMovieByKeyword: build.query<TSearchByKeywordResponse, string>({
            query: (keyword) => ({
                url: `/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`
            }),
        }),
    }),
});

export const {useGetMovieByIdQuery, useGetMovieByKeywordQuery} = movieApi