import { createAsyncThunk } from "@reduxjs/toolkit";
import { TNewCollectionFormData } from "../types/types";
import { LOCALSTORAGE_USER_TOKEN } from "@/shared/consts/consts";
import { CollectionsEndpoints } from "@/shared/api/routes";
import { backendBaseUrl } from "@/shared/config/backend";
import { TResponseError } from "@/shared/types/errorTypes";
import { TCollection } from "@/entities/collection";

export const createNewCollection = createAsyncThunk(
    'newCollection/create',
    async (newCollection: FormData, { rejectWithValue }) => {
        const token = localStorage.getItem(LOCALSTORAGE_USER_TOKEN)
        try {
            const response = await fetch(`${backendBaseUrl}${CollectionsEndpoints.CREATE_COLLECTION_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: newCollection
            })
            if (!response.ok) {
                let errorResponse: TResponseError;
                try {
                    errorResponse = await response.json() as TResponseError;
                } catch (jsonError) {
                    errorResponse = { message: response.statusText, code: response.status };
                }
                return rejectWithValue(JSON.stringify(errorResponse))
            }
            const collection = await response.json() as TCollection

            return collection

        } catch (error) {
            return rejectWithValue(`Не удалось создать коллекцию: ${(error as Error).message}`)
        }
    }
)