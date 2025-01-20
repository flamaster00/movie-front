import cn from 'classnames'
import styles from './MoviesInNewCollectionList.module.scss'
import { TMovieByKeyword, MovieByKeywordPreview } from '@/entities/movie'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'

type MoviesInNewCollectionListProps = {
    className?: string,
    movies: TMovieByKeyword[] | [],
    removeMovie: ({filmId}: TMovieByKeyword) => void
}

export const MoviesInNewCollectionList = (props: MoviesInNewCollectionListProps) => {
    const { className, movies, removeMovie } = props

    if (!movies.length) {
        return (
            <p>Список пуст, добавьте кино</p>
        )
    }

    const list = movies.map(movie => (
        <Button
            shape={ButtonShape.TEXT}
            variant={ButtonVariant.CLEAR}
            onClick={() => removeMovie(movie)}
            key={movie.filmId}
        >
            <MovieByKeywordPreview
                movie={movie}
                className={styles.highlight}
            />
        </Button>
    ))

    return (
        <div
            className={cn(styles.MoviesInNewCollectionList, className)}
        >
            {movies && list}
        </div>
    )
}