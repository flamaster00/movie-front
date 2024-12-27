import { TMovie } from "@/entities/movie"

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

export type TGetAllCollectionsQuery = {
    rows: number,
    data: TCollection[]
}

export type TGetCollectionById = {
    collection: TCollection
}