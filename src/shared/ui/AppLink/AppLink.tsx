import {  FC, HTMLProps, memo } from 'react'
import cn from 'classnames'
import styles from './AppLink.module.scss'
import Link, { LinkProps } from 'next/link'

type TAppLinkProps = {
    className?: string,
} & LinkProps & HTMLProps<HTMLAnchorElement>

export const AppLink = memo((props: TAppLinkProps)=> {
  const { 
    href,
    children, 
    className, 
    ...otherProps
  } = props

  return (
    <Link
      href={href}
      className={cn(styles.AppLink, className)}
      {...otherProps}
    >
      {children}
    </Link>
  )
})