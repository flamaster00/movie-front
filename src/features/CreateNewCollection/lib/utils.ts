import { TNewCollection } from "@/entities/collection"
import { TNewCollectionFormData, TNewCollectionInfo } from "../model/types/types"
import { TMovieByKeyword } from "@/entities/movie"
import { TUser } from "@/entities/user"

const makeCollectionFormData = (collection: TNewCollectionFormData) => {
    const { description, published, title, image, userId, movies } = collection
    const formdata = new FormData()
    formdata.append('title', title)
    formdata.append('description', description)
    formdata.append('published', published)
    formdata.append('image', image)
    formdata.append('userId', userId)
    formdata.append('movies', movies)

    return formdata
}

const makeMoviesIdArray = (movies: TMovieByKeyword[]) => {
    const movieIdArr = movies.map(movie => movie.filmId)
    console.log(movieIdArr);
    
    return movieIdArr
}

export const transformToFormData = (
    newCollectionInfo: TNewCollectionInfo,
    movies: TMovieByKeyword[],
    userId: TUser['id']
) => {

    console.log('save collection func');

    const { title, description, published, filelist } = newCollectionInfo
    const image = filelist[0]
    const publishedStringified = JSON.stringify(published)
    const userIdStringified = JSON.stringify(userId)
    const moviesIdArr = makeMoviesIdArray(movies)
    const moviesIdArrStringified = JSON.stringify(moviesIdArr)

    const newCollection: TNewCollection = {
        title,
        description,
        image,
        published: publishedStringified,
        userId: userIdStringified,
        movies: moviesIdArrStringified
    }
    const newCollectionFormData = makeCollectionFormData(newCollection)
    console.log(newCollectionFormData);
    
    return newCollectionFormData
}