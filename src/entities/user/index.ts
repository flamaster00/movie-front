import type { TUser, TUserWithRole, TUserSchema, TRegistrationRequest, TUserApiResponse, TLoginRequest } from './model/types/types'
import type { TResponseError } from '../../shared/types/errorTypes'
import { userActions, userReducer } from './model/slice/userSlice'
import { getUserAuthData } from './model/selectors/getUserAuthData'
import { registration, login, check } from './api/userApi'
import { getUsername } from './model/selectors/getUsername'

export {
    // api
    registration, login, check,
    //types
    TUser, TUserWithRole, TUserSchema, 
    TRegistrationRequest, TUserApiResponse, 
    TLoginRequest, TResponseError,
    // slice
    userActions, userReducer,
    // selectors
    getUserAuthData, getUsername
}