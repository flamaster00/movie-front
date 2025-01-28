export type TUser = {
    id: number,
    email: string,
    username: string,
}

export type TUserWithRole = {
    role: 'USER' | 'ADMIN'
} & TUser

export type TUserSchema = {
    authData?: TUserWithRole
}

export type TUserApiResponse = {
    token: string
}

export type TRegistrationRequest = {
    [username:string] : string,
    email: string,
    password: string
}
export type TLoginRequest = {
    [email: string]: string,
    password: string
}