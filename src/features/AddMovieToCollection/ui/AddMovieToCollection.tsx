import cn from 'classnames'
import styles from './AddMovieToCollection.module.scss'
import _ from 'lodash'
import { useState, useCallback, useEffect } from 'react'
import { SearchMovieByKeywordList } from '@/widgets/SearchMovieByKeywordList'
import { SearchBar } from '@/widgets/SearchBar'
import { MoviesInCollectionList } from '@/widgets/MoviesInCollectionList'
import { TMovieByKeyword, TMoviesInCollection } from '@/entities/movie'
import { MoviesInNewCollectionList } from '@/widgets/MoviesInNewCollectionList'

type AddMovieToCollectionProps = {
    className?: string,
    saveMovies: (movies: TMoviesInCollection) => void
}

export const AddMovieToCollection = (props: AddMovieToCollectionProps) => {
    const { className, saveMovies } = props

    const [movieTitle, setMovieTitle] = useState('')
    const [keyword, setKeyword] = useState('')
    const [movies, setMovies] = useState<TMovieByKeyword[]>([])

    useEffect(() => {
        const idArr: TMoviesInCollection = []
        for (const movie of movies) {
            idArr.push(movie.filmId)
        }
        saveMovies(idArr)
    }, [movies])

    const searchMovie = (title: string) => {
        const uri = encodeURI(title)
        setKeyword(uri)
    }

    const debouncedFN = useCallback(_.debounce((title) => searchMovie(title), 500), [])

    const onSearchMovie = (title: string) => {
        setMovieTitle(title)
        debouncedFN(title)
    }

    const clearSearch = () => onSearchMovie('')

    const addMovie = (newMovie: TMovieByKeyword) => {
        const movieInCollection = movies.some(movie => movie.filmId === newMovie.filmId)
        if (movieInCollection) return;
        setMovies([newMovie, ...movies])
    }

    const removeMovie = ({ filmId }: TMovieByKeyword) => {
        const filteredMovies = movies.filter(movie => movie.filmId !== filmId)
        setMovies(filteredMovies)
    }

    return (
        <section
            className={cn(styles.AddMovieToCollection, className)}
        >
            <label htmlFor="movieTitle">Поиск фильмов и сериалов</label>
            <SearchBar
                className={styles.search}
                id='movieTitle'
                clear={clearSearch}
                placeholder='Игра престолов'
                value={movieTitle}
                onChange={onSearchMovie}
            />
            <SearchMovieByKeywordList addMovie={addMovie} keyword={keyword} />
            <MoviesInNewCollectionList removeMovie={removeMovie} movies={movies} />
        </section>
    )
}