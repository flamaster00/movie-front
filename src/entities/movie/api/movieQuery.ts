import { kinopoiskApi } from "@/shared/api/kinopoiskApi";
import { TKPMovie } from "../model/types";

const movieApi = kinopoiskApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieById: build.query<TKPMovie, number>({
            query: (id) => ({
                url: `/api/v2.2/films/${id}`
            }),
        }),
        
    }),
});

export const {useGetMovieByIdQuery} = movieApi