'use client'
import cn from 'classnames'
import styles from './Collection.module.scss'
import { backendBaseUrl } from '@/shared/config/backend'
import { TCollection } from '../../model/types'

type CollectionProps = {
    className?: string
    collection?: TCollection
}

export const Collection = (props: CollectionProps) => {
    const { className, collection } = props

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