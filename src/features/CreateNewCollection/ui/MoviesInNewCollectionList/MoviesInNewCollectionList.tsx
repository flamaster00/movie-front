import cn from 'classnames'
import styles from './MoviesInNewCollectionList.module.scss'
import { TMovieByKeyword, MovieByKeywordPreview } from '@/entities/movie'
import { Button, ButtonShape, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { getNewCollectionMovies } from '@/features/CreateNewCollection/model/selectors/getNewCollectionMovies/getNewCollectionMovies'
import { newCollectionActions } from '@/features/CreateNewCollection/model/slice/newCollectionSlice'
import IconDelete from '@/shared/static/icons/icon_delete.svg'

type MoviesInNewCollectionListProps = {
    className?: string,
}

export const MoviesInNewCollectionList = (props: MoviesInNewCollectionListProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const movies = useAppSelector(getNewCollectionMovies)

    const removeMovie = (movieToRemove: TMovieByKeyword) => {
        dispatch(newCollectionActions.removeMovie(movieToRemove))
    }

    return (
        <ul
            className={cn(styles.MoviesInNewCollectionList, className)}
        >
            {movies.length ?
                movies.map(movie => (
                    <li
                        key={movie.filmId}
                        className={styles.listItem}
                    >
                        <MovieByKeywordPreview
                            movie={movie}
                            className={styles.highlight}
                        />
                        <Button
                            className={styles.removeMovieBtn}
                            onClick={() => removeMovie(movie)}
                            shape={ButtonShape.ICON}
                            variant={ButtonVariant.OUTLINED_BG}
                            aria-label='Удалить видео из коллекции'
                        >
                            <IconDelete className={styles.iconDelete} />
                        </Button>
                    </li>
                ))
                : <p>Список пуст, добавьте кино</p>
            }
        </ul>
    )
}