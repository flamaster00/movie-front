import cn from 'classnames'
import styles from './createNewCollectionForm.module.scss'
import { NewCollectionInfo } from './NewCollectionInfo/NewCollectionInfo'
import { useAppSelector } from '@/app/store/hooks'
import { AddMovieToCollection } from './AddMovieToCollection/AddMovieToCollection'
import { getNewCollectionMovies } from '../model/selectors/getNewCollectionMovies/getNewCollectionMovies'
import { MoviesInNewCollectionList } from './MoviesInNewCollectionList/MoviesInNewCollectionList'

type CreateNewCollectionFormProps = {
    className?: string
}

export const CreateNewCollectionForm = (props: CreateNewCollectionFormProps) => {
    const { className } = props

    return (
        <div
            className={cn(styles.CreateNewCollectionForm, className)}
        >
            <NewCollectionInfo
                className={styles.info}
            />
            <AddMovieToCollection className={styles.search} />
            <MoviesInNewCollectionList className={styles.list} />
        </div>
    )
}