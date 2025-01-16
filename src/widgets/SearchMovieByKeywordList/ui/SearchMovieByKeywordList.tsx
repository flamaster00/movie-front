import cn from 'classnames'
import styles from './SearchMovieByKeywordList.module.scss'
import { useGetMovieByKeywordQuery } from '@/entities/movie/api/movieQuery'
import { MoviePreview } from '@/entities/movie'
import { Loader } from '@/shared/ui/Loader/Loader'

type SearchMovieByKeywordListProps = {
    className?: string,
    keyword: string
}

export const SearchMovieByKeywordList = (props: SearchMovieByKeywordListProps) => {
    const { className, keyword } = props

    if (!keyword) return <></>

    const { data, isLoading, isError, error } = useGetMovieByKeywordQuery(keyword)
    const films = data?.films
    const filmsList = films?.map((movie) => (
        <MoviePreview id={movie.filmId} key={movie.filmId} className={cn(styles.movie)} />
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