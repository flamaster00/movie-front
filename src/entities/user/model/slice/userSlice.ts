import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser, TUserSchema, TUserWithRole } from "../types/types";
import { LOCALSTORAGE_USER_TOKEN } from "@/shared/consts/consts";
import { jwtDecode } from "jwt-decode";

const initialState: TUserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<TUserWithRole>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const token = localStorage.getItem(LOCALSTORAGE_USER_TOKEN)
            if (token) {
                state.authData = jwtDecode(token)
            }
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(LOCALSTORAGE_USER_TOKEN)
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice