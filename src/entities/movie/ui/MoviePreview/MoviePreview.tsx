'use client'
import cn from 'classnames'
import styles from './MoviePreview.module.scss'
import { useGetMovieByIdQuery } from '../../api/movieQuery'
import { Badge } from '@/shared/ui/Badge/Badge'

type MoviePreviewProps = {
  className?: string
  id: number
}

export const MoviePreview = (props: MoviePreviewProps) => {
  const { className, id } = props
  const { isError, isLoading, data: movie } = useGetMovieByIdQuery(id)
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error :(</p>
  }
  return (
    <div
      className={cn(styles.MoviePreview, className)}
    >
      <div className={styles.imageWrapper}>
        <img src={movie?.posterUrlPreview} alt={movie?.nameRu} className={styles.image} />
        <Badge className={styles.ratingKP}>KP {movie?.ratingKinopoisk}</Badge>
        <Badge className={styles.ratingIMDB}>IMDB {movie?.ratingImdb}</Badge>
      </div>
      <p className={styles.nameRu}>{movie?.nameRu}</p>
      <p className={styles.nameOriginal}>{movie?.nameOriginal}</p>
      <p className={styles.nameEn}>{movie?.nameEn}</p>
      <p className={styles.year}>{movie?.year}</p>
    </div>
  )
}