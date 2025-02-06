import { TNewCollectionFormData, TNewCollectionInfo } from "../model/types/types"
import { TMovieByKeyword } from "@/entities/movie"
import { TUser } from "@/entities/user"

const makeCollectionFormData = (collection: TNewCollectionFormData) => {
    const { description, published, title, image, userId, movies } = collection
    const formdata = new FormData()
    formdata.append('title', title)
    formdata.append('description', description)
    formdata.append('published', published)
    formdata.append('userId', userId)
    formdata.append('movies', movies)
    if (image) {
        formdata.append('image', image)
    }

    return formdata
}

const makeMoviesIdArray = (movies: TMovieByKeyword[]) => {
    const movieIdArr = movies.map(movie => movie.filmId)

    return movieIdArr
}

export const transformToFormData = (
    newCollectionInfo: TNewCollectionInfo,
    movies: TMovieByKeyword[],
    userId: TUser['id']
) => {


    const { title, description, published, filelist } = newCollectionInfo
    const image = filelist ? filelist[0] : null
    const publishedStringified = JSON.stringify(published)
    const userIdStringified = JSON.stringify(userId)
    const moviesIdArr = makeMoviesIdArray(movies)
    const moviesIdArrStringified = JSON.stringify(moviesIdArr)

    const newCollection: TNewCollectionFormData = {
        title,
        description,
        image,
        published: publishedStringified,
        userId: userIdStringified,
        movies: moviesIdArrStringified
    }
    const newCollectionFormData = makeCollectionFormData(newCollection)

    return newCollectionFormData
}