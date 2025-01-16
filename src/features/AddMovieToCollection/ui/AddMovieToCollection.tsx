import cn from 'classnames'
import styles from './AddMovieToCollection.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import _ from 'lodash'
import { useState, useCallback } from 'react'
import { SearchMovieByKeywordList } from '@/widgets/SearchMovieByKeywordList'
import SearchBar from '@/widgets/Navbar/SearchBar/SearchBar'

type AddMovieToCollectionProps = {
    className?: string
}

export const AddMovieToCollection = (props: AddMovieToCollectionProps) => {
    const { className } = props

    const [movieTitle, setMovieTitle] = useState('')
    const [keyword, setKeyword] = useState('')
  
    const searchMovie = (title: string) => {
      const uri = encodeURI(title)
      setKeyword(uri)
    }
  
    const debouncedFN = useCallback(_.debounce((title) => searchMovie(title), 500), [])
  
    const onChangeHandler = (title: string) => {
      setMovieTitle(title)
      debouncedFN(title)
    }
    return (
        <section
            className={cn(styles.AddMovieToCollection, className)}
        >
            <label htmlFor="movieTitle">Поиск фильмов и сериалов</label>
            <Input type='search' id='movieTitle' placeholder='Игра престолов' value={movieTitle} onChange={onChangeHandler} />
            <SearchMovieByKeywordList keyword={keyword}/>
        </section>
    )
}