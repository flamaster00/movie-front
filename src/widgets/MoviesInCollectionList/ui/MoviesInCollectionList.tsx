'use client'
import cn from 'classnames'
import styles from './MoviesInCollectionList.module.scss'
import { backendBaseUrl } from '@/shared/config/backend'
import { MoviePreview, TMovie } from '@/entities/movie'
import { useEffect, useState } from 'react'

type MoviesInCollectionListProps = {
    className?: string,
    id: string
}

export const MoviesInCollectionList = (props: MoviesInCollectionListProps) => {
    const { className, id } = props
    const [moviesId, setMoviesId] = useState<TMovie[] | []>([])

    const getMovies = async (id: string) => {
        try {
            const response = await fetch(`${backendBaseUrl}/api/movies/${id}`)
            const data = await response.json()
            setMoviesId(data.rows)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const list = moviesId.map(el => (
        <MoviePreview id={el.kinopoiskId} key={el.kinopoiskId} />
    ))

    useEffect(() => {
        if (id) {
            getMovies(id)
        }
    }, [id])


    return (
        <div
            className={cn(styles.MoviesInCollectionList, className)}
        >
            {moviesId && list}
        </div>
    )
}