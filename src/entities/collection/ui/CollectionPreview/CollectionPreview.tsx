import cn from 'classnames'
import styles from './CollectionPreview.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Badge } from '@/shared/ui/Badge/Badge'
import { LikeButton } from '@/widgets/LikeButton'
import { TCollection } from '../../model/types'

type CollectionPreviewProps = {
  collection: TCollection
}


export const CollectionPreview = (props: CollectionPreviewProps) => {
  const { collection } = props
  const imgUrl = `http://localhost:5000/${collection.image}`
  return (
    <div
      className={cn(styles.CollectionPreview)}
    >
      <div className={cn(styles.card)}>
        <Badge className={cn(styles.likes)}>Likes</Badge>
        <Badge className={cn(styles.views)}>views</Badge>
        <LikeButton className={cn(styles.likeBtn)} />
        <AppLink href={`collections/${collection.id}`} >
          <div className={styles.imageWrapper}>
            <img src={imgUrl} alt={collection.title} className={cn(styles.img)} />
          </div>
        </AppLink>
      </div>
      <span className={cn(styles.author)}>{collection.user.username}</span>

      <p className={cn(styles.name)}>
        {collection.title}
      </p>

    </div>
  )
}
