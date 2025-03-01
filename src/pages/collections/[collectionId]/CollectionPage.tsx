'use client'
import cn from 'classnames'
import styles from './CollectionPage.module.scss'
import { useParams, useSearchParams } from 'next/navigation'
import { MoviesInCollectionList } from '@/widgets/MoviesInCollectionList'
import { Collection, useGetCollectionByIdQuery } from '@/entities/collection'
import { Loader } from '@/shared/ui/Loader/Loader'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Button } from '@/shared/ui/Button/Button'
import { useGetMoviesInCollectionQuery } from '@/entities/movie'
import { useAppSelector } from '@/app/store/hooks'
import { getUserAuthData } from '@/entities/user'

const CollectionPage = () => {
    const params = useParams()
    // TODO сделать обработку undefined и массива
    const id = params?.collectionId as string
    console.log(params);
    const searchParams = useSearchParams()
    console.log(searchParams);
    
    
    console.log('hooks');
    
    const userAuthData = useAppSelector(getUserAuthData)

    const {
        isLoading: collectionLoading,
        isError: collectionError,
        data: collection
    } = useGetCollectionByIdQuery(Number(id))

    const {
        data: movies
    } = useGetMoviesInCollectionQuery(id)

    const isOwner = userAuthData?.id === collection?.user.id

    if (collectionLoading) return <Loader />

    if (collectionError) return <p>Ошибка загрузки коллекции</p>

    if (!collection) {
        return (
            <div className={styles.notFound}>
                <p>Коллекция не найдена</p>
                <Button>
                    <AppLink href={'/'}>
                        На главную
                    </AppLink>
                </Button>
            </div>
        )
    }


    return (
        <main className={cn(
            // isOwner ? styles.isOwnerCollectionPage : styles.CollectionPage
            styles.CollectionPage
        )}>
            {/* {isOwner &&
                <Button className={styles.edit}>Редактировать</Button>
            } */}
            <Collection collection={collection} className={styles.collection}/>
            {movies && <MoviesInCollectionList movies={movies.rows} className={styles.movies}/>}
        </main>
    )
}

export default CollectionPage;