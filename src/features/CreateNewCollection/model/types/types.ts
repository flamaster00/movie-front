import { TMovieByKeyword } from "@/entities/movie"

export type TNewCollectionInfo = {
    title: string,
    description: string,
    published: boolean,
    filelist: FileList
}

export type TMoviesIdArr = [TMovieByKeyword['filmId']]

export type TNewCollectionFormData = {
    title: string,
    description: string,
    published: string,
    image: File,
    userId: string,
    movies: string
}
