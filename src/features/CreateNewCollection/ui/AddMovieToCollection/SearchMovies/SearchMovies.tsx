import cn from 'classnames'
import styles from './SearchMovies.module.scss'
import { SearchBar } from '@/widgets/SearchBar'
import { useCallback, useEffect, useRef, useState } from 'react'
import _ from 'lodash'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import IconClose from '@/shared/static/icons/icon_close.svg'
import { SearchMovieByKeywordList } from './SearchMovieByKeywordList/SearchMovieByKeywordList'

type SearchMoviesProps = {
    className?: string
    show: boolean,
    closeSearch: () => void,
}

export const SearchMovies = (props: SearchMoviesProps) => {
    const { className, show, closeSearch } = props
    const searchRef = useRef<HTMLDivElement>(null)



    useEffect(() => {
        if (searchRef.current && show) {
            void searchRef.current.offsetWidth;
        }
    }, [show]);

    const [movieTitle, setMovieTitle] = useState('')
    const [keyword, setKeyword] = useState('')

    const clearSearch = () => onSearchMovie('')
    const searchMovie = (title: string) => {
        const uri = encodeURI(title)
        setKeyword(uri)
    }

    const debouncedFN = useCallback(_.debounce((title) => searchMovie(title), 500), [])

    const onSearchMovie = (title: string) => {
        setMovieTitle(title)
        debouncedFN(title)
    }

    return (
        <aside
            className={cn(styles.SearchMovies, className, { [styles.show]: show })}
            ref={searchRef}
        >
            <div className={styles.search}>
                <Button
                    className={styles.iconCloseBtn}
                    shape={ButtonShape.ICON}
                    variant={ButtonVariant.CLEAR}
                    onClick={closeSearch}
                >
                    <IconClose className={styles.iconClose} />
                </Button>
                <label
                    htmlFor="movieTitle"
                    className={styles.searchLabel}
                >
                    Поиск фильмов и сериалов
                </label>
                <SearchBar
                    className={styles.searchBar}
                    id='movieTitle'
                    clear={clearSearch}
                    placeholder='Игра престолов'
                    value={movieTitle}
                    onChange={onSearchMovie}
                />
            </div>
            <SearchMovieByKeywordList
                keyword={keyword}
                className={styles.moviesList}
            />
        </aside>
    )
}