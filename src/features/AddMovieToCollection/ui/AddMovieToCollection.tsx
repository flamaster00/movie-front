import cn from 'classnames'
import styles from './AddMovieToCollection.module.scss'
import _ from 'lodash'
import { useState, useCallback } from 'react'
import { SearchMovieByKeywordList } from '@/widgets/SearchMovieByKeywordList'
import { SearchBar } from '@/widgets/SearchBar'
import { MoviesInCollectionList } from '@/widgets/MoviesInCollectionList'
import { TMovieByKeyword } from '@/entities/movie'
import { MoviesInNewCollectionList } from '@/widgets/MoviesInNewCollectionList'

type AddMovieToCollectionProps = {
    className?: string
}

export const AddMovieToCollection = (props: AddMovieToCollectionProps) => {
    const { className } = props

    const [movieTitle, setMovieTitle] = useState('')
    const [keyword, setKeyword] = useState('')
    const [movies, setMovies] = useState<TMovieByKeyword[]>([])

    const searchMovie = (title: string) => {
        const uri = encodeURI(title)
        setKeyword(uri)
    }

    const debouncedFN = useCallback(_.debounce((title) => searchMovie(title), 500), [])

    const onChangeHandler = (title: string) => {
        setMovieTitle(title)
        debouncedFN(title)
    }

    const clearSearch = () => onChangeHandler('')

    const addMovie = (newMovie: TMovieByKeyword) => {
        const movieInCollection = movies.some(movie => movie.filmId === newMovie.filmId)
        if (movieInCollection) return;
        setMovies([...movies, newMovie])
    }

    const removeMovie = ({filmId}: TMovieByKeyword) => {
        const filteredMovies = movies.filter(movie => movie.filmId !== filmId)
        setMovies(filteredMovies)
    }

    return (
        <section
            className={cn(styles.AddMovieToCollection, className)}
        >
            <MoviesInNewCollectionList removeMovie={removeMovie} movies={movies} />
            <label htmlFor="movieTitle">Поиск фильмов и сериалов</label>
            <SearchBar
                className={styles.search}
                id='movieTitle'
                clear={clearSearch}
                placeholder='Игра престолов'
                value={movieTitle}
                onChange={onChangeHandler}
            />
            <SearchMovieByKeywordList addMovie={addMovie} keyword={keyword} />
        </section>
    )
}