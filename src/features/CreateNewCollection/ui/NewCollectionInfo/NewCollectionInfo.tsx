import styles from './NewCollectionInfo.module.scss'
import cn from 'classnames'
import { KeyboardEvent } from 'react'
import { backendBaseUrl } from '@/shared/config/backend'
import { Button, ButtonVariant } from '@/shared/ui/Button/Button'
import { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TNewCollectionInfo } from '../../model/types/types'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { getUserAuthData } from '@/entities/user'
import { transformToFormData } from '../../lib/utils'
import { createNewCollection } from '../../model/services/createNewCollection'
import { getNewCollectionMovies } from '../../model/selectors/getNewCollectionMovies/getNewCollectionMovies'
import { newCollectionActions } from '../../model/slice/newCollectionSlice'
import { useRouter } from 'next/navigation'
import { PageRoutes } from '@/shared/api/routes'

type NewCollectionInfoProps = {
  className?: string,
}

export const NewCollectionInfo = (props: NewCollectionInfoProps) => {
  const { className } = props
  const [successMsg, setSuccessMsg] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const dispatch = useAppDispatch()
  const { collection, error, loading } = useAppSelector(state => state.newCollection)
  const userAuthData = useAppSelector(getUserAuthData)
  const movies = useAppSelector(getNewCollectionMovies)
  const username = userAuthData?.username
  const router = useRouter()


  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm<TNewCollectionInfo>()

  const formDefaultValues: TNewCollectionInfo = {
    description: '',
    title: '',
    published: false,
    filelist: null
  }

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

  const resetForm = () => {
    reset(formDefaultValues)
    setSelectedFile(null)
    dispatch(newCollectionActions.setMovies([]))
  }

  const saveCollection = async (newCollectionInfo: TNewCollectionInfo) => {
    if (userAuthData === undefined) return
    const newCollection = transformToFormData(newCollectionInfo, movies, userAuthData?.id)
    try {
      const collection = await dispatch(createNewCollection(newCollection)).unwrap()
      setSuccessMsg(`Коллекция ${collection.title} успешно создана`)
      resetForm()
      setTimeout(() => {
        router.push(`${PageRoutes.COLLECTIONS}/${collection.id}`)
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }

  const onSubmit: SubmitHandler<TNewCollectionInfo> = async (newCollectionInfo) => {
    if (!username && !selectedFile) return
    saveCollection(newCollectionInfo)
  }

  return (
    <form
      className={cn(styles.NewCollectionInfo, className)}
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
            {...register('filelist',
              { required: 'Файл не выбран' }
            )}
            onChange={previewUploadedFile}
          />
          {(errors.filelist?.message && !selectedFile) && <p className={styles.errorText}>{errors.filelist?.message}</p>}
        </div>

        <div className={cn(styles.author)}>
          {username ?
            <p>{username}</p>
            : <p>Автор</p>
          }
        </div>

        <div className={cn(styles.title)}>
          {errors.title?.message && <p className={cn(styles.inputErrorText, styles.errorText)}>{errors.title.message}</p>}
          <textarea
            className={cn(styles.titleTextarea, { [styles.emptyField]: errors.title })}
            placeholder='Название'
            rows={3}
            {...register('title',
              { required: 'Поле обязательно' }
            )}
            onKeyDown={onEnterPressPreventNewLine}
          />
        </div>

        <div className={cn(styles.description)}>
          {errors.description?.message && <p className={cn(styles.inputErrorText, styles.errorText)}>{errors.description.message}</p>}
          <textarea
            className={cn(styles.descriptionTextarea, { [styles.emptyField]: errors.description })}
            placeholder='Описание'
            rows={6}
            {...register('description',
              { required: 'Поле обязательно' }
            )}
          />
        </div>
      </div>

      <div className={styles.publish}>
        <label htmlFor="publish">Опубликовать коллекцию</label>
        <input type="checkbox" id="publish" {...register('published')} />
      </div>
      <div className={styles.submitBtns}>
        <Button
          className={styles.cancel}
          variant={ButtonVariant.CLEAR}
          onClick={() => resetForm()}
        >
          Сбросить
        </Button>

        <Button
          variant={ButtonVariant.OUTLINED_BG}
          type='submit'
          disabled={!username || loading}
        >
          Сохранить
        </Button>
      </div>
      {!username && <p className={styles.authError}>Вы неавторизованы</p>}
      {loading && <p className={styles.loading}>Сохранение коллекции...</p>}
      {successMsg && <p className={styles.successMsg}>{successMsg}</p>}
    </form>
  )
}