import { kinopoiskApi } from "@/shared/api/kinopoiskApi";
import { TGetMoviesByCollectionIdResponse, TKPMovie, TMovieId, TMovieInDB, TMoviesInCollection, TSearchByKeywordResponse } from "../model/types";
import { backendApi } from "@/shared/api/backendAPI";

const movieApiKP = kinopoiskApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieById: build.query<TKPMovie, TMovieId>({
            query: (movieId) => ({
                url: `/api/v2.2/films/${movieId}`
            }),
        }),
        // Поиск по ключевым словам на кинопоиске
        getMovieByKeyword: build.query<TSearchByKeywordResponse, string>({
            query: (keyword) => ({
                url: `/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`
            }),
        }),
    }),
    overrideExisting: true
});

const movieApiDB = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesInCollection: build.query<TGetMoviesByCollectionIdResponse, TMovieInDB['collectionId']>({
            query: (collectionId) => ({
                url: `/movies/${collectionId}`,
            }),
        })
    }),
    overrideExisting: true
});

export const { useGetMovieByIdQuery, useGetMovieByKeywordQuery } = movieApiKP
export const { useGetMoviesInCollectionQuery } = movieApiDB