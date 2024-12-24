import { TMovie } from "./MovieTypes"

export type TCollection = {
    id: number, 
    published: boolean,
    name: string,
    description: string,
    img: File,
    views: number,
    likes: number,
    userId: number,
    movies: TMovie[] | null
}