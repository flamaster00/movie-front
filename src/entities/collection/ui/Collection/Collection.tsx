'use client'
import cn from 'classnames'
import styles from './Collection.module.scss'
import { useEffect, useState } from 'react'
import { backendBaseUrl } from '@/shared/config/backend'
import { Badge } from '@/shared/ui/Badge/Badge'
import { TCollection } from '../../model/types'
import { useGetCollectionByIdQuery } from '../../api/collectionQuery'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Button } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

type CollectionProps = {
    className?: string
    id: string
}

export const Collection = (props: CollectionProps) => {
    const { className, id } = props

    const { isLoading, isError, data: collection } = useGetCollectionByIdQuery(Number(id))

    if (isLoading) return <Loader />

    if (isError) return <p>Ошибка загрузки коллекции</p>

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

    let imgUrl
    if (collection?.image) {
        imgUrl = backendBaseUrl + '/' + collection?.image
    } else {
        imgUrl = backendBaseUrl + '/default_img.png'
    }

    return (
        <div
            className={cn(styles.Collection, className)}
        >
            <div className={styles.image}>
                <div className={styles.imageWrapper}>
                    <img
                        src={imgUrl}
                        alt={collection?.title}
                        className={styles.img}
                    />
                </div>
            </div>

            <div className={cn(styles.author)}>
                <p>{collection?.user.username}</p>
            </div>

            {/* <Badge className={cn(styles.views, className)}>
                Views: {collection?.views}
            </Badge>

            <Badge className={cn(styles.likes, className)}>
                Likes: {collection?.likes}
            </Badge> */}

            <div className={cn(styles.title)}>
                <p>{collection?.title}</p>
            </div>

            <div className={cn(styles.description)}>
                <p>{collection?.description}</p>
            </div>

        </div>
    )
}