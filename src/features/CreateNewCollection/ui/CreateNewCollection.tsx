import styles from './CreateNewCollection.module.scss'
import cn from 'classnames'
import { backendBaseUrl } from '@/shared/config/backend'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'

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
          <img
            src={`${backendBaseUrl}/default_img.png`}
            alt='Изображение коллекции'
            className={styles.img}
          />
          <input type="file" className={styles.fileInput} />
        </div>
        <div className={cn(styles.author)}>
          <p>Автор</p>
        </div>
        <div className={cn(styles.title)}>
          <textarea className={cn(styles.titleTextarea)} placeholder='Название' rows={3} />
        </div>
        <div className={cn(styles.description)}>
          <textarea className={cn(styles.descriptionTextarea)} placeholder='Описание' rows={6} />
        </div>
      </div>
      <div className={styles.publish}>
        <label htmlFor="publish">Опубликовать коллекцию</label>
        <input type="checkbox" name="publish" id="publish" />
      </div>
      <div className={styles.submit}>
        <Button className={styles.cancel} variant={ButtonVariant.CLEAR}>Отменить</Button>
        <Button variant={ButtonVariant.OUTLINED_BG}>Сохранить</Button>
      </div>
    </form>
  )
}