import { TMovieByKeyword } from "@/entities/movie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type newCollectionSliceState = {
    published: boolean,
    title: string,
    description: string,
    movies: TMovieByKeyword[]
    image?: File,
    userId?: number,
}

type TNewCollectionInfo = Pick<newCollectionSliceState, 'title' | 'description' | 'published' | 'image'>



const initialState: newCollectionSliceState = {
    published: false,
    title: '',
    description: '',
    movies: [],
}

const newCollectionSlice = createSlice({
    name: 'newCollectionSlice',
    initialState,
    reducers: {

        setPublished: (state, action: PayloadAction<newCollectionSliceState['published']>) => {
            state = { ...state, published: action.payload }
        },

        setTitle: (state, action: PayloadAction<newCollectionSliceState['title']>) => {
            state = { ...state, title: action.payload }
        },

        setDescription: (state, action: PayloadAction<newCollectionSliceState['description']>) => {
            state = { ...state, description: action.payload }
        },
        setImage: (state, action: PayloadAction<newCollectionSliceState['image']>) => {
            state = { ...state, image: action.payload }
        },

        setMovies: (state, action: PayloadAction<newCollectionSliceState['movies']>) => {
            state = { ...state, movies: action.payload }
        },

        addMovie: (state, action: PayloadAction<TMovieByKeyword>) => {
            state.movies.unshift(action.payload)
        },

        removeMovie: (state, action: PayloadAction<TMovieByKeyword>) => {
            state.movies = state.movies.filter(movie => movie.filmId !== action.payload.filmId)
        },

        setUserId: (state, action: PayloadAction<newCollectionSliceState['userId']>) => {
            state = { ...state, userId: action.payload }
        },

        setCollectionInfo: (state, action: PayloadAction<TNewCollectionInfo>) => {
            const { title, description, published, image } = action.payload
            state.title = title
            state.description = description
            state.published = published
            state.image = image
            console.log(state);
            
        }
    }
})

export const {
    actions: newCollectionActions,
    reducer: newCollectionReducer,
} = newCollectionSlice