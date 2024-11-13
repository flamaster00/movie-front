import styles from './Playlist.module.scss'
import { PlaylistItem } from './PlaylistItem/PlaylistItem'
import { movie } from './movie'

export const Playlist = () => {
    return (
        <div className={styles.playlist}>
            <PlaylistItem movie={movie}/>
            <PlaylistItem movie={movie}/>
        </div>
    )
}
