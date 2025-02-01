'use client'
import cn from 'classnames'
import styles from './CreateCollectionPage.module.scss'
import { AddMovieToCollection } from '@/features/AddMovieToCollection'
import { CreateNewCollection } from '@/features/CreateNewCollection'
import { LOCALSTORAGE_USER_TOKEN } from '@/shared/consts/consts'
import { useState } from 'react'
import { TNewCollection } from '@/entities/collection'
import { TMoviesInCollection } from '@/entities/movie'
import { useAppSelector } from '@/app/store/hooks'
import { getUserAuthData } from '@/entities/user'
import { backendBaseUrl } from '@/shared/config/backend'
import { CollectionsEndpoints } from '@/shared/api/routes'

type CreateCollectionPageProps = {
  className?: string
}

export type TCreateNewCollectionForm = {
  image: File,
  title: string,
  description: string,
  publish: boolean,
}

const CreateCollectionPage = (props: CreateCollectionPageProps) => {
  const { className } = props
  const [moviesInCollection, setMoviesInCollection] = useState<TMoviesInCollection>([])

  const authData = useAppSelector(getUserAuthData)

  const addMovies = (movies: TMoviesInCollection) => setMoviesInCollection(movies)

  const createCollection = async (collection: TNewCollection) => {
    const token = localStorage.getItem(LOCALSTORAGE_USER_TOKEN)
    if (!authData) return
    if (!token) return
    
    const formData = new FormData()
    formData.append('title', collection.title)
    formData.append('description', collection.description)
    formData.append('image', collection.image)
    formData.append('published', JSON.stringify(collection.published))
    formData.append('userId', JSON.stringify(collection.userId))
    formData.append('movies', JSON.stringify(collection.movies))
    
    console.log(formData);
    

    try {
      const response = await fetch(`${backendBaseUrl}${CollectionsEndpoints.CREATE_COLLECTION_ENDPOINT}`, 
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        }
      )
      if (!response.ok) {
        console.log(response);
        
        throw new Error('ошибка')
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  
  const saveCollection = async (collection: TNewCollection) => {
    const newCollection: TNewCollection = {...collection, movies: moviesInCollection}
    await createCollection(newCollection)
  }
  return (
    <div className={cn(styles.CreateCollectionPage, className)}>
      <CreateNewCollection saveCollection={saveCollection} className={styles.form} />
      <AddMovieToCollection saveMovies={addMovies} className={styles.list} />
    </div>
  )
}

export default CreateCollectionPage;