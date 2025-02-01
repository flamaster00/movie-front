'use client'
import cn from 'classnames'
import styles from './MoviesInCollectionList.module.scss'
import { MoviePreview, useGetMoviesInCollectionQuery } from '@/entities/movie'
import { Loader } from '@/shared/ui/Loader/Loader'

type MoviesInCollectionListProps = {
    className?: string,
    id: string
}

export const MoviesInCollectionList = (props: MoviesInCollectionListProps) => {
    const { className, id } = props
    const {isError, isLoading, data } = useGetMoviesInCollectionQuery(id)

    if (isLoading) return <Loader />

    // TODO обработка ошибки
    if (isError) return <p>Ошибка загрузки.</p>

    if (!data) return <p>Кино и сериалы в коллекции не найдены</p>

    const list = data.rows.map(el => (
        <MoviePreview className={styles.moviePreview} id={el.kinopoiskId} key={el.kinopoiskId} />
    ))

    return (
        <div
            className={cn(styles.MoviesInCollectionList, className)}
        >
            {data && list}
        </div>
    )
}