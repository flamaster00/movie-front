'use client'
import cn from 'classnames'
import styles from './MoviesInCollectionList.module.scss'
import { MoviePreview, TMovieInDB } from '@/entities/movie'

type MoviesInCollectionListProps = {
    className?: string,
    movies: TMovieInDB[]
}

export const MoviesInCollectionList = (props: MoviesInCollectionListProps) => {
    const { className, movies } = props

    return (
        <ul
            className={cn(styles.MoviesInCollectionList, className)}
        >
            {movies.map(movie => (
                <li
                    className={styles.listItem}
                    key={movie.kinopoiskId}
                >
                    <MoviePreview
                        className={styles.moviePreview}
                        id={movie.kinopoiskId}
                    />
                </li>
            ))}
        </ul>
    )
}