import cn from 'classnames'
import styles from './CollectionPreview.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Badge } from '@/shared/ui/Badge/Badge'
import { TCollection } from '../../model/types'
import { backendBaseUrl } from '@/shared/config/backend'
import IconLikes from '@/shared/static/icons/icon_favorite.svg'
import IconViews from '@/shared/static/icons/icon_views.svg'

type CollectionPreviewProps = {
  collection: TCollection
}


export const CollectionPreview = (props: CollectionPreviewProps) => {
  const { collection } = props
  const imgUrl = `${backendBaseUrl}/${collection.image}`
  return (
    <div
      className={cn(styles.CollectionPreview)}
    >
      <div className={cn(styles.card)}>

        {/* <Badge className={cn(styles.likes)}>
          <IconLikes className={styles.icon} /> {collection.likes}
        </Badge>

        <Badge className={cn(styles.views)}>
          <IconViews className={styles.icon} /> {collection.views}
        </Badge>

        <LikeButton className={cn(styles.likeBtn)} /> */}

        <AppLink href={`collections/${collection.id}`} >
          <div className={styles.imageWrapper}>
            <img src={imgUrl} alt={collection.title} className={cn(styles.img)} />
          </div>
        </AppLink>

      </div>

      <span className={cn(styles.author)}>
        {collection.user.username}
      </span>

        <p className={cn(styles.title)}>
          {collection.title}
        </p>

    </div>
  )
}
