import styles from './Loader.module.scss';
import cn from 'classnames'

export type TLoaderProps = {
  className?: string
}

export const Loader = ({ className }: TLoaderProps) => (
  <div className={cn(styles['lds-roller'], [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);