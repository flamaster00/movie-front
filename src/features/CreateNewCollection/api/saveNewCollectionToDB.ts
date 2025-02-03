import { backendBaseUrl } from "@/shared/config/backend";
import { CollectionsEndpoints } from "@/shared/api/routes";
import { LOCALSTORAGE_USER_TOKEN } from "@/shared/consts/consts";
import { TResponseError } from "@/shared/types/errorTypes";

export const saveNewCollectionToDB = async (newCollection: FormData) => {
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
            throw new Error(JSON.stringify(errorResponse))
        }
        const collection = await response.json()
        console.log(collection);
        return collection

    } catch (error) {
        if (error instanceof Error) {
            throw error;
        } else {
            throw new Error('Непредвиденная ошибка');
        }
    }
    
}