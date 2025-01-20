import cn from 'classnames'
import styles from './MovieByKeywordPreview.module.scss'
import { Badge } from '@/shared/ui/Badge/Badge'
import { TMovieByKeyword } from '../../model/types'

type MovieByKeywordPreviewProps = {
  className?: string,
  movie: TMovieByKeyword
}

export const MovieByKeywordPreview = (props: MovieByKeywordPreviewProps) => {
  const { className, movie } = props

  const rating = isNaN(Number(movie.rating)) ? '0.0' : movie.rating
  
  return (
    <div
      className={cn(styles.MovieByKeywordPreview, className)}
    >
      <div className={styles.imageWrapper}>
        <img src={movie.posterUrlPreview} alt={movie.nameRu} className={styles.image} />
        <Badge className={styles.ratingKP}>KP {rating}</Badge>
      </div>
      <p className={styles.nameRu}>{movie.nameRu}</p>
      {movie.nameEn && <p className={styles.nameEn}>{movie.nameEn}</p>}
      {movie.year && <p className={styles.year}>{movie.year}</p>}
    </div>
  )
}