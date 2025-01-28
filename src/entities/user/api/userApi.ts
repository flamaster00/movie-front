import { jwtDecode } from "jwt-decode";
import { UserEndpoints } from "@/shared/api/routes";
import { TLoginRequest, TRegistrationRequest, TUser, TUserApiResponse } from "../model/types/types";
import { backendBaseUrl } from "@/shared/config/backend";
import { LOCALSTORAGE_USER_KEY } from "@/shared/consts/consts";



export const registration = async (data: TRegistrationRequest) => {
    try {
        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }
        const response = await fetch(`${backendBaseUrl}${UserEndpoints.USER_REGISTRATION_ENDPOINT}`, {
            method: 'POST',
            body: formData
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const { token } = await response.json() as TUserApiResponse
        localStorage.setItem('token', token)
        const user: TUser = jwtDecode(token)
        return user

    } catch (error) {
        console.log(error);
    }

}

export const login = async (data: TLoginRequest) => {
    try {
        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }
        const response = await fetch(`${backendBaseUrl}${UserEndpoints.USER_LOGIN_ENDPOINT}`, {
            method: 'POST',
            body: formData
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const { token } = await response.json() as TUserApiResponse
        localStorage.setItem('token', token)
        const user: TUser = jwtDecode(token)
        return user

    } catch (error) {
        console.log(error);
    }
}

export const check = async () => {
    const LStoken = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';

    try {
        const response = await fetch(`${backendBaseUrl}${UserEndpoints.USER_AUTH_ENDPOINT}`, {
            method: 'GET',
            headers: {
                'Authorization': LStoken
            }
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const { token } = await response.json() as TUserApiResponse
        localStorage.setItem('token', token)
        const user: TUser = jwtDecode(token)
        return user
        
    } catch (error) {
        console.log(error);
    }
}