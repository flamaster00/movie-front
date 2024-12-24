import cn from 'classnames'
import styles from './CollectionPreview.module.scss'
import { TCollection } from '@/shared/types/CollectionTypes'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { LikeButton } from '../LikeButton/LikeButton'
import { Badge } from '@/shared/ui/Badge/Badge'

type CollectionPreviewProps = {
  collection: TCollection
}


export const CollectionPreview = (props: CollectionPreviewProps) => {
  const { collection } = props
  const imgUrl = `http://localhost:5000/${collection.img}`
  return (
    <div
      className={cn(styles.CollectionPreview)}
    >
      <div className={cn(styles.imgWrapper)}>
        <Badge className={cn(styles.likes)}>Likes</Badge>
        <Badge className={cn(styles.views)}>views</Badge>
        <LikeButton className={cn(styles.likeBtn)} />
        <AppLink href={`collections/${collection.id}`} >
          <img src={imgUrl} alt={collection.name} className={cn(styles.image)} />
        </AppLink>
      </div>
      <span className={cn(styles.author)}>Author</span>

      <p className={cn(styles.name)}>
        {collection.name}
        </p>

    </div>
  )
}
