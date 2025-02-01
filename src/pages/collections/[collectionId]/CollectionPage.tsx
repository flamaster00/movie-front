'use client'
import styles from './CollectionPage.module.scss'
import { useParams } from 'next/navigation'
import { MoviesInCollectionList } from '@/widgets/MoviesInCollectionList'
import { Collection } from '@/entities/collection'

type CollectionPage = {
    
}

const CollectionPage = (props: CollectionPage) => {
    const params = useParams()
    // TODO сделать обработку undefined и массива
    const id = params?.collectionId as string
    
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

export default CollectionPage;