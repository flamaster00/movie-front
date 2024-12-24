'use client'
import cn from 'classnames'
import styles from './SearchBar.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import Form from 'next/form'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import IconClose from '@/shared/static/icons/icon_close.svg'
import IconSearch from '@/shared/static/icons/icon_search.svg'
import { ChangeEvent, FormEvent, MouseEventHandler, useCallback, useState } from 'react'

type TSearchBarProps = {

}

const SearchBar = (props: TSearchBarProps) => {
  

  const [searchValue, setSearchValue] = useState<string>('')

  const onChangeHandler = useCallback((value: string) => {
    console.log(value)
    setSearchValue(value)
  }, [])

  const clearInput = useCallback(() => {
    setSearchValue('')
  }, [])

  const onclick: MouseEventHandler = (e) => {
    e.preventDefault()
 
  }

  return (
    <Form action={''} className={cn(styles.SearchBar)}>

      <label
        htmlFor='SearchBar'
        className={styles.visuallyHidden}
      >
        Поиск по сайту
      </label>

      <Input
        type="search"
        name='search'
        id='SearchBar'
        className={cn(styles.input)}
        value={searchValue}
        onChange={onChangeHandler}
      />

      {searchValue && <Button
        className={cn(styles.iconButton, styles.clearIcon)}
        variant={ButtonVariant.CLEAR}
        shape={ButtonShape.ICON}
        onClick={clearInput}
      >
        <IconClose className={styles.icon} />
      </Button>}

      <Button
        type='submit'
        onClick={onclick}
        className={cn(styles.iconButton, styles.searchIcon)}
        variant={ButtonVariant.CLEAR}
        shape={ButtonShape.ICON}
      >
        <IconSearch className={styles.icon}/>
      </Button>

    </Form>
  )
}

export default SearchBar