import { TMovieByKeyword } from "@/entities/movie"

export type TNewCollectionInfo = {
    title: string,
    description: string,
    published: boolean,
    filelist: FileList | null
}

export type TMoviesIdArr = [TMovieByKeyword['filmId']]

export type TNewCollectionFormData = {
    title: string,
    description: string,
    published: string,
    image: File | null,
    userId: string,
    movies: string
}
