export type TKPMovie = {
    kinopoiskId: number
    kinopoiskHDId: string
    imdbId: string
    nameRu: string
    nameEn: any
    nameOriginal: string
    posterUrl: string
    posterUrlPreview: string
    coverUrl: string
    logoUrl: string
    reviewsCount: number
    ratingGoodReview: number
    ratingGoodReviewVoteCount: number
    ratingKinopoisk: number
    ratingKinopoiskVoteCount: number
    ratingImdb: number
    ratingImdbVoteCount: number
    ratingFilmCritics: number
    ratingFilmCriticsVoteCount: number
    ratingAwait: any
    ratingAwaitCount: number
    ratingRfCritics: any
    ratingRfCriticsVoteCount: number
    webUrl: string
    year: number
    filmLength: number
    slogan: string
    description: string
    shortDescription: string
    editorAnnotation: any
    isTicketsAvailable: boolean
    productionStatus: any
    type: string
    ratingMpaa: string
    ratingAgeLimits: string
    countries: ICountry[]
    genres: IGenre[]
    startYear: any
    endYear: any
    serial: boolean
    shortFilm: boolean
    completed: boolean
    hasImax: boolean
    has3D: boolean
    lastSync: string
  }
  
  export interface ICountry {
    country: string
  }
  
  export interface IGenre {
    genre: string
  }
  