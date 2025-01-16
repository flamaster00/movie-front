'use client'
import cn from 'classnames'
import styles from './CreateCollectionPage.module.scss'
import { AddMovieToCollection } from '@/features/AddMovieToCollection'
import { CreateNewCollection } from '@/features/CreateNewCollection'

type CreateCollectionPageProps = {
  className?: string
}

export const CreateCollectionPage = (props: CreateCollectionPageProps) => {
  const { className } = props


  return (
    <main className={cn(styles.CreateCollectionPage, className)}>
      <CreateNewCollection />
      <AddMovieToCollection />
    </main>
  )
}