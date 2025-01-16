import cn from 'classnames'
import styles from './CreateNewCollection.module.scss'
import { backendBaseUrl } from '@/shared/config/backend'
import { Input } from '@/shared/ui/Input/Input'

type CreateNewCollectionProps = {
  className?: string
}

export const CreateNewCollection = (props: CreateNewCollectionProps) => {
  const { className } = props
  return (
    <form
      className={cn(styles.CreateNewCollection, className)}
    >
      <div
        className={cn(styles.Collection, className)}
      >
        <div className={styles.image}>
          {/* <input type="file"/> */}
          <img
            src={`${backendBaseUrl}/default_img.png`}
            alt='Изображение коллекции'
            className={styles.img}
          />
        </div>
        <div className={cn(styles.author)}>
          <p>Автор</p>
        </div>
        <div className={cn(styles.title)}>
          <Input type='text' className={cn(styles.titleInput)} placeholder='Название' fullWidth/>
        </div>
        <div className={cn(styles.description)}>
          <textarea className={cn(styles.descriptionTextarea)} placeholder='Описание'/>
        </div>
      </div>
    </form>
  )
}