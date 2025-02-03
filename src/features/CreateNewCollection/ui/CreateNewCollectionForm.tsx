import cn from 'classnames'
import styles from './createNewCollectionForm.module.scss'
import { NewCollectionInfo } from './NewCollectionInfo/NewCollectionInfo'
import { useAppSelector } from '@/app/store/hooks'
import { getUserAuthData } from '@/entities/user'
import { AddMovieToCollection } from './AddMovieToCollection/AddMovieToCollection'
import { getNewCollectionMovies } from '../model/selectors/getNewCollectionMovies/getNewCollectionMovies'
import { MoviesInNewCollectionList } from './MoviesInNewCollectionList/MoviesInNewCollectionList'
import { TNewCollectionInfo } from '../model/types/types'
import { transformToFormData } from '../lib/utils'
import { saveNewCollectionToDB } from '../api/saveNewCollectionToDB'

type CreateNewCollectionFormProps = {
    className?: string
}

export const CreateNewCollectionForm = (props: CreateNewCollectionFormProps) => {
    const { className } = props
    const userAuthData = useAppSelector(getUserAuthData)
    const selectedMovies = useAppSelector(getNewCollectionMovies)

    const saveCollection = async (newCollectionInfo: TNewCollectionInfo) => {
        if (userAuthData === undefined) return
        const newCollection = transformToFormData(newCollectionInfo, selectedMovies, userAuthData?.id)
        await saveNewCollectionToDB(newCollection)
    }

    return (
        <div
            className={cn(styles.CreateNewCollectionForm, className)}
        >
            <NewCollectionInfo
                className={styles.info}
                username={userAuthData?.username}
                saveCollection={saveCollection}
            />
            <AddMovieToCollection className={styles.search} />
            <MoviesInNewCollectionList
                className={styles.list}
                movies={selectedMovies}
            />
        </div>
    )
}