import { TCollection } from "@/shared/types/CollectionTypes"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TCollectionState = {
    collections: TCollection[],
    isLoading: boolean,
    error: string,
    count: number
}

const initialState: TCollectionState = {
    collections: [],
    isLoading: false,
    error: '',
    count: 0
}

export const collectionSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        add(state, action: PayloadAction<number>){
            state.count += action.payload
        }
    }
})

export default collectionSlice.reducer