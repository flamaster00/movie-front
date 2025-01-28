'use client'
import cn from 'classnames'
import styles from './Collection.module.scss'
import { useEffect, useState } from 'react'
import { backendBaseUrl } from '@/shared/config/backend'
import { Badge } from '@/shared/ui/Badge/Badge'
import { TCollection } from '../../model/types'

type CollectionProps = {
    className?: string
    id: string
}

export const Collection = (props: CollectionProps) => {
    const { className, id } = props
    const [collection, setCollection] = useState<TCollection | null>(null);


    let imgUrl
    if (collection?.image) {
        imgUrl = backendBaseUrl + '/' + collection?.image
    } else {
        imgUrl = backendBaseUrl + '/default_img.png'
    }
    const getCollection = async () => {
        try {

            const response = await fetch(`http://localhost:5000/api/collections/${id}`)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const json = await response.json()
            setCollection(json)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCollection()
    }, [])

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
            <Badge className={cn(styles.views, className)}>
                Views: {collection?.views}
            </Badge>
            <Badge className={cn(styles.likes, className)}>
                Likes: {collection?.likes}
            </Badge>
            <div className={cn(styles.title)}>

                <p >{collection?.title}</p>
            </div>
            <div className={cn(styles.description)}>

                <p >{collection?.description}</p>
            </div>


        </div>
    )
}