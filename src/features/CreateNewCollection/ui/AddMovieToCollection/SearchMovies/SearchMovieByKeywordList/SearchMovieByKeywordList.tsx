import cn from 'classnames'
import styles from './SearchMovieByKeywordList.module.scss'
import { Loader } from '@/shared/ui/Loader/Loader'
import { MovieByKeywordPreview, TMovieByKeyword, useGetMovieByKeywordQuery } from '@/entities/movie'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { getNewCollectionMovies } from '@/features/CreateNewCollection/model/selectors/getNewCollectionMovies/getNewCollectionMovies'
import { newCollectionActions } from '@/features/CreateNewCollection/model/slice/newCollectionSlice'

type SearchMovieByKeywordListProps = {
    className?: string,
    keyword: string,
}

export const SearchMovieByKeywordList = (props: SearchMovieByKeywordListProps) => {
    const { className, keyword } = props

    const dispatch = useAppDispatch()
    const movies = useAppSelector(getNewCollectionMovies)

    const { data, isLoading, isError, error } = useGetMovieByKeywordQuery(keyword)
    const films = data?.films

    const addMovie = (newMovie: TMovieByKeyword) => {
        const movieInCollection = movies.some(movie => movie.filmId === newMovie.filmId)
        if (movieInCollection) return;
        dispatch(newCollectionActions.addMovie(newMovie))
    }

    if (isError) {
        if ('status' in error) {

            if (error.status === 402) {
                return <p className={styles.error}>Кончился лимит запросов к АПИ Кинопоиска на сегодня :( Возвращайтесь завтра</p>
            }
        }

        return <p className={styles.error}>Ошибка</p>
    }

    if (isLoading) return <Loader className={styles.loader} />

    return (
        <ul className={cn(styles.SearchMovieByKeywordList, className)}>
            {films &&
                films?.map((movie) => (
                    <li
                        className={styles.listItem}
                        key={movie.filmId}
                    >
                        <Button
                            variant={ButtonVariant.CLEAR}
                            shape={ButtonShape.TEXT}
                            onClick={() => addMovie(movie)}
                        >
                            <MovieByKeywordPreview
                                movie={movie}
                                className={cn(styles.movie)}
                            />
                        </Button>
                        <Button
                            className={styles.addBtn}
                            onClick={() => addMovie(movie)}
                        >
                            Добавить
                        </Button>
                    </li>
                ))
            }
        </ul>
    )
}