import { IMovie } from '@/shared/types/KPTypes'
import styles from './PlaylistItem.module.scss'
import { FC } from 'react'
import ClockIcon from '@/shared/static/icons/icon_clock.svg'

type PlaylistItemProps = {
    movie: IMovie
}

export const PlaylistItem: FC<PlaylistItemProps> = (props) => {
    const { movie } = props
    const genres = movie.genres.map((el, idx) => (
        <span>{el.genre}</span>
    ))
    return (
        <div className={styles.item}>
            <div className={styles.imgWrapper}>
                <img src={movie.posterUrlPreview} alt={movie.nameRu} />
                <div className={styles.infoOverImg}>
                    {/* <div className={styles.genres}>
                        {genres}
                    </div> */}
                    <div className={styles.length}>
                        <ClockIcon fill='#e8e8ee' />
                        <span>{movie.filmLength} мин.</span>
                    </div>
                    <div className={styles.rating}>
                        <span>KP {movie.ratingKinopoisk}</span>
                        <span>IMDB {movie.ratingImdb}</span>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <span className={styles.nameRu}>{movie.nameRu}</span>
                <span className={styles.nameOriginal}>{movie.nameOriginal}</span>
                <span className={styles.genres}>{genres}</span>
                <span className={styles.year}>{movie.year}</span>
            </div>
        </div>
    )
}
