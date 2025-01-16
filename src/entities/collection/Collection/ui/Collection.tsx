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
    if (collection?.img) {
        imgUrl = backendBaseUrl + '/' + collection?.img
    } else {
        imgUrl = backendBaseUrl + '/default_img.png'
    }
    const getData = async () => {
        try {

            const response = await fetch(`http://localhost:5000/api/collections/${id}`)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const json = await response.json()
            setCollection(json)
            console.log(json);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div
            className={cn(styles.Collection, className)}
        >
            <div className={styles.image}>
                <img
                    src={imgUrl}
                    alt={collection?.name}
                    className={styles.img}
                />
            </div>
            <div className={cn(styles.author)}>

                <p>Автор</p>
            </div>
            <Badge className={cn(styles.views, className)}>
                Views: {collection?.views}
            </Badge>
            <Badge className={cn(styles.likes, className)}>
                Likes: {collection?.likes}
            </Badge>
            <div className={cn(styles.title)}>

                <p >{collection?.name}</p>
            </div>
            <div className={cn(styles.description)}>

                <p >{collection?.description}</p>
            </div>
            
            
        </div>
    )
}