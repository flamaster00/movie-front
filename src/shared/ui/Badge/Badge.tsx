import cn from 'classnames'
import styles from './Badge.module.scss'
import { HTMLAttributes } from 'react'

type BadgeProps = {
    className?: string
} & HTMLAttributes<HTMLDivElement>

export const Badge = (props: BadgeProps) => {
    const {className, children} = props
  return (
    <div className={cn(styles.Badge, className)}>
        {children}
    </div>
  )
}
