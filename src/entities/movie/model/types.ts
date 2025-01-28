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
  countries: TCountry[]
  genres: TGenre[]
  startYear: any
  endYear: any
  serial: boolean
  shortFilm: boolean
  completed: boolean
  hasImax: boolean
  has3D: boolean
  lastSync: string
}

export type TMovieByKeyword = {
  filmId: number
  nameRu: string
  nameEn: string
  type: string
  year: string
  description: string
  filmLength: string
  countries: TCountry[]
  genres: TGenre[]
  rating: string
  ratingVoteCount: number
  posterUrl: string
  posterUrlPreview: string
}

export type TSearchByKeywordResponse = {
  keyword: string
  pagesCount: number
  searchFilmsCountResult: number
  films: TMovieByKeyword[]
}

export type TCountry = {
  country: string
}

export type TGenre = {
  genre: string
}

export type TMovieId = TKPMovie['kinopoiskId'] | TMovieByKeyword['filmId']

export type TMoviesInCollection = TMovieId[]
