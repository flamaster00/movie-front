import styles from './CreateNewCollection.module.scss'
import cn from 'classnames'
import { KeyboardEvent } from 'react'
import { backendBaseUrl } from '@/shared/config/backend'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'
import { ChangeEvent, useState } from 'react'
import { useAppSelector } from '@/app/store/hooks'
import { getUserAuthData, getUsername } from '@/entities/user'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TNewCollection } from '@/entities/collection'

type CreateNewCollectionProps = {
  className?: string,
  saveCollection: (collection: TNewCollection) => void
}

type TCreateNewCollectionForm = {
  image: File,
  title: string,
  description: string,
  publish: boolean,
}

export const CreateNewCollection = (props: CreateNewCollectionProps) => {
  const { className, saveCollection } = props
  const username = useAppSelector(getUsername)
  const authData = useAppSelector(getUserAuthData)

  const { register, handleSubmit, formState: { errors } } = useForm<TCreateNewCollectionForm>()

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const previewUploadedFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setSelectedFile(e.target.files[0])
  }
  const ImgSrc = selectedFile === null ? `${backendBaseUrl}/default_img.png` : URL.createObjectURL(selectedFile)

  const onEnterPressPreventNewLine = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const onSubmit: SubmitHandler<TCreateNewCollectionForm> = (data) => {
    if (!authData) return
    if (!selectedFile) return
    const newCollection: TNewCollection = {
      image: selectedFile,
      title: data.title,
      description: data.description,
      published: data.publish,
      userId: authData?.id
    }
    saveCollection(newCollection)
  }

  return (
    <form
      className={cn(styles.CreateNewCollection, className)}
      onSubmit={handleSubmit(onSubmit)}

    >
      <div
        className={cn(styles.Collection, className)}
      >
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <img
              src={ImgSrc}
              alt='Изображение коллекции'
              className={styles.img}
            />
          </div>
          <input
            type="file"
            className={styles.fileInput}
            {...register('image')}
            onChange={previewUploadedFile}
          />
        </div>
        <div className={cn(styles.author)}>
          {username ?
            <p>{username}</p>
            : <p>Автор</p>
          }
        </div>
        <div className={cn(styles.title)}>
          {errors.title?.message && <p className={styles.inputErrorText}>{errors.title.message}</p>}
          <textarea
            className={cn(styles.titleTextarea, {[styles.emptyField]: errors.title})}
            placeholder='Название'
            rows={3}
            {...register('title', { required: 'Поле обязательно' })}
            onKeyDown={onEnterPressPreventNewLine}
          />
        </div>
        <div className={cn(styles.description)}>
          {errors.description?.message && <p className={styles.inputErrorText}>{errors.description.message}</p>}
          <textarea
            className={cn(styles.descriptionTextarea, {[styles.emptyField]: errors.description})}
            placeholder='Описание'
            rows={6}
            {...register('description', { required: 'Поле обязательно' })}
            onKeyDown={onEnterPressPreventNewLine}
          />
        </div>
      </div>
      <div className={styles.publish}>
        <label htmlFor="publish">Опубликовать коллекцию</label>
        <input type="checkbox" id="publish" {...register('publish')} />
      </div>
      <div className={styles.submitBtns}>
        <Button
          className={styles.cancel}
          variant={ButtonVariant.CLEAR}>Отменить</Button>
        <Button
          variant={ButtonVariant.OUTLINED_BG}
          type='submit'
          disabled={!authData}
        >
          Сохранить
        </Button>
      </div>
        {!authData && <p className={styles.authError}>Вы неавторизованы</p>}
    </form>
  )
}