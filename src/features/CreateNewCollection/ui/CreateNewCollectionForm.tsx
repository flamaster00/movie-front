import cn from 'classnames'
import styles from './createNewCollectionForm.module.scss'
import { NewCollectionInfo } from './NewCollectionInfo/NewCollectionInfo'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { getUserAuthData } from '@/entities/user'
import { AddMovieToCollection } from './AddMovieToCollection/AddMovieToCollection'
import { getNewCollectionMovies } from '../model/selectors/getNewCollectionMovies/getNewCollectionMovies'
import { MoviesInNewCollectionList } from './MoviesInNewCollectionList/MoviesInNewCollectionList'
import { TNewCollectionInfo } from '../model/types/types'
import { transformToFormData } from '../lib/utils'
import { saveNewCollectionToDB } from '../api/saveNewCollectionToDB'
import { useState } from 'react'
import { TCollection } from '@/entities/collection'
import { useRouter } from 'next/router'
import { newCollectionActions } from '../model/slice/newCollectionSlice'
import { PageRoutes } from '@/shared/api/routes'
import { TResponseError } from '@/shared/types/errorTypes'
import { createNewCollection } from '../model/services/createNewCollection'

type CreateNewCollectionFormProps = {
    className?: string
}

export const CreateNewCollectionForm = (props: CreateNewCollectionFormProps) => {
    const { className } = props


    const selectedMovies = useAppSelector(getNewCollectionMovies)



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