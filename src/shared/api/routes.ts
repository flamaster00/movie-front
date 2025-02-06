export const enum ApiRoutes{
    COLLECTIONS_ROUTE = '/api/collections',
    USER_ROUTE = '/api/user',
    MOVIES_ROUTE = '/api/movies'
}
export const enum CollectionsEndpoints{
    GET_COLLECTIONS_ENDPOINT = `${ApiRoutes.COLLECTIONS_ROUTE}/`,
    CREATE_COLLECTION_ENDPOINT = `${ApiRoutes.COLLECTIONS_ROUTE}/`
}

export const enum UserEndpoints {
    USER_REGISTRATION_ENDPOINT = `${ApiRoutes.USER_ROUTE}/registration`,
    USER_LOGIN_ENDPOINT = `${ApiRoutes.USER_ROUTE}/login`,
    USER_AUTH_ENDPOINT = `${ApiRoutes.USER_ROUTE}/auth`
}

export const enum MoviesEndpoints {
    GET_MOVIES_BY_COLLECTION_ID = `${ApiRoutes.MOVIES_ROUTE}/`
}

export const enum PageRoutes {
    MAIN = '/',
    CREATE_COLLECTION = '/create',
    COLLECTIONS = '/collections',
    AUTH = '/auth'
}