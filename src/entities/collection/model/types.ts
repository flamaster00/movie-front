import { TMoviesInCollection } from "@/entities/movie"
import { TUser } from "@/entities/user"

export type TCollection = {
    id: number, 
    published: boolean,
    title: string,
    description: string,
    image: File,
    views: number,
    likes: number,
    user: TUser,
    movies?: TMoviesInCollection
}

export type TNewCollection = {
    published: boolean,
    title: string,
    description: string,
    image: File,
    userId: number,
    movies?: TMoviesInCollection
}

export type TGetAllCollectionsQuery = {
    rows: number,
    data: TCollection[]
}

export type TGetCollectionById = {
    collection: TCollection
}