import cn from 'classnames'
import styles from './SearchMovieByKeywordList.module.scss'
import { Loader } from '@/shared/ui/Loader/Loader'
import { MovieByKeywordPreview, TMovieByKeyword, useGetMovieByKeywordQuery } from '@/entities/movie'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'

type SearchMovieByKeywordListProps = {
    className?: string,
    keyword: string,
    addMovie: (movie: TMovieByKeyword) => void
}

export const SearchMovieByKeywordList = (props: SearchMovieByKeywordListProps) => {
    const { className, keyword, addMovie } = props

    if (!keyword) return <></>

    const { data, isLoading, isError, error } = useGetMovieByKeywordQuery(keyword)
    const films = data?.films
    const filmsList = films?.map((movie) => (
        <Button
            variant={ButtonVariant.CLEAR}
            shape={ButtonShape.TEXT}
            onClick={() => addMovie(movie)}
            key={movie.filmId}
        >
            <MovieByKeywordPreview
                movie={movie}
                className={cn(styles.movie)}
            />
        </Button>
    ))

    if (isError) {
        if ('status' in error) {

            if (error.status === 402) {
                return <p className={styles.error}>Кончился лимит запросов к АПИ Кинопоиска на сегодня :( Возвращайтесь завтра</p>
            }
        }

        return <p className={styles.error}>Ошибка</p>
    }

    if (isLoading) return <Loader />

    return (
        <ul className={cn(styles.SearchMovieByKeywordList, className)}>
            {films && filmsList}
        </ul>
    )
}