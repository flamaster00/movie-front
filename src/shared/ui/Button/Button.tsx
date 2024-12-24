import { ButtonHTMLAttributes, memo } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

export const enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

export const enum ButtonVariant {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  OUTLINED_BG = 'outlined_background'
}

export const enum ButtonShape {
  RECTANGLE = 'rectangle',
  ROUND = 'round',
  PILL = 'pill',
  ROUNDED = 'rounded',
  TEXT = 'text',
  ICON = 'icon'
}

type TButtonProps = {
  className?: string,
  size?: ButtonSize,
  shape?: ButtonShape,
  variant?: ButtonVariant,
  disabled?: boolean
  
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo((props: TButtonProps) => {
  const { 
    children, 
    className, 
    size = ButtonSize.M, 
    shape = ButtonShape.ROUNDED, 
    variant = ButtonVariant.OUTLINED_BG,
    disabled,
    ...otherProps
  } = props

  const mods = {
    [styles.disabled]: disabled
  }

  return (
    <button
      type='button'
      className={cn(styles.Button, [className, styles[size], styles[shape], styles[variant]], mods)}
      {...otherProps}
    >
      {children}
    </button>
  )
})