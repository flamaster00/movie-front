import { TMovieByKeyword } from "@/entities/movie";
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { createNewCollection } from "../services/createNewCollection";
import { TResponseError } from "@/shared/types/errorTypes";

type TNewCollection = {
    published: boolean,
    title: string,
    description: string,
    movies: TMovieByKeyword[]
    image: File | null,
    userId: number | undefined,
}

type TNewCollectionSliceState = {
    collection: TNewCollection,
    loading: boolean,
    error: TResponseError | SerializedError | null,
}

const initialState: TNewCollectionSliceState = {
    collection: {
        published: false,
        title: '',
        description: '',
        movies: [],
        image: null,
        userId: undefined
    },
    loading: false,
    error: null
}

const newCollectionSlice = createSlice({
    name: 'newCollectionSlice',
    initialState,
    reducers: {

        setMovies: (state, action: PayloadAction<TNewCollectionSliceState['collection']['movies']>) => {
            state.collection.movies = action.payload
        },

        addMovie: (state, action: PayloadAction<TMovieByKeyword>) => {
            state.collection.movies.unshift(action.payload)
        },

        removeMovie: (state, action: PayloadAction<TMovieByKeyword>) => {
            state.collection.movies = state.collection.movies.filter(movie => movie.filmId !== action.payload.filmId)
        },

        setCollectionInfo: (state, action: PayloadAction<Partial<TNewCollection>>) => {
            state.collection = {
                ...state.collection,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createNewCollection.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(createNewCollection.fulfilled, (state) => {
            state.loading = false
            state.collection = initialState.collection
        })
        .addCase(createNewCollection.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload as TResponseError
            } else {
                state.error = action.error
            }
        })
    }
})

export const {
    actions: newCollectionActions,
    reducer: newCollectionReducer,
} = newCollectionSlice