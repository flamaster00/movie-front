import cn from 'classnames'
import styles from './CollectionsList.module.scss'
import { CollectionPreview, TCollection } from '@/entities/collection'

type CollectionsListProps = {
    collectionsList: TCollection[]
    className?: string
}

export const CollectionsList = (props: CollectionsListProps) => {
    const {className, collectionsList} = props

    const list = collectionsList.map((collection) => (
        <CollectionPreview collection={collection} key={collection.id}/>
    ))

  return (
    <div className={cn(styles.CollectionsList, className)}>
        {list}
    </div>
  )
}
