'use client'
import cn from 'classnames'
import styles from './SearchBar.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import IconClear from '@/shared/static/icons/icon_close.svg'
import IconSearch from '@/shared/static/icons/icon_search.svg'
import { InputHTMLAttributes, MouseEventHandler, useCallback, useState } from 'react'
import classNames from 'classnames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

type TSearchBarProps = {
  className?: string,
  placeholder?: string,
  value?: string,
  onChange?: (title: string) => void,
  clear?: () => void,
  searchIcon?: boolean
} & HTMLInputProps

export const SearchBar = (props: TSearchBarProps) => {
  const { placeholder, value, onChange, clear, className, searchIcon, ...otherProps } = props

  // const [searchValue, setSearchValue] = useState<string>('')

  const onclick: MouseEventHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className={cn(styles.SearchBar, className)}>
      <label
        htmlFor='SearchBar'
        className={styles.visuallyHidden}
      >
        Поиск по сайту
      </label>

      <Input
        type="search"
        name='search'
        placeholder={placeholder}
        className={cn(styles.input, {[styles.inputPaddingWithSearchIcon]: searchIcon})}
        value={value}
        onChange={onChange}
        {...otherProps}
      />

      {value && <Button
        className={cn(styles.iconButton, styles.clearIcon, {[styles.clearIconPaddingWithSearchIcon]: searchIcon})}
        variant={ButtonVariant.CLEAR}
        shape={ButtonShape.ICON}
        onClick={clear}
      >
        <IconClear className={styles.icon} />
      </Button>}

      {searchIcon &&
        <Button
          type='submit'
          onClick={onclick}
          className={cn(styles.iconButton, styles.searchIcon)}
          variant={ButtonVariant.CLEAR}
          shape={ButtonShape.ICON}
        >
          <IconSearch className={styles.icon} />
        </Button>
      }
    </div>
  )
}

