import cn from 'classnames'
import styles from './AddMovieToCollection.module.scss'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { SearchMovies } from './SearchMovies/SearchMovies'

type AddMovieToCollectionProps = {
    className?: string,
}

export const AddMovieToCollection = (props: AddMovieToCollectionProps) => {
    const { className } = props

    const [isShow, setIsShow] = useState(false)

    const showSearchMovies = () => {
        setIsShow(true)
    }

    const hideSearchMovies = () => {
        setIsShow(false)
    }

    return (
        <section
            className={cn(styles.AddMovieToCollection, className)}
        >
            <p>Кино и сериалы в коллекции</p>
            <Button onClick={showSearchMovies} disabled={isShow}>Добавить</Button>
            <SearchMovies show={isShow} closeSearch={hideSearchMovies} />
        </section>
    )
}