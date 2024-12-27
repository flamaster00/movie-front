'use client'
import { Collection } from '@/entities/collection/Collection/ui/Collection'
import styles from './CollectionPage.module.scss'
import { useParams } from 'next/navigation'
import { useGetMoviesInCollectionQuery } from '@/entities/collection/api/collectionQuery'
import { useEffect } from 'react'
import { backendBaseUrl } from '@/shared/config/backend'
import { MoviesInCollectionList } from '@/widgets/MoviesInCollectionList'

type CollectionPage = {
    
}

export const CollectionPage = (props: CollectionPage) => {
    const params = useParams()
    // TODO сделать обработку undefined и массива
    const id = params?.collectionId as string
    
    console.log(id)
    const {} = props

    return (
        <>
            <main className={styles.wrapper}>
                {id && <Collection id={id}/>}
                {id && <MoviesInCollectionList id={id}/>}
            </main>
        </>
    )
}