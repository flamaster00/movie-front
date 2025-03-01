import cn from 'classnames'
import styles from './EditCollection.module.scss'

type EditCollectionProps = {
    className?: string
}

export const EditCollection = (props: EditCollectionProps) => {
    const { className } = props
    return (
        <div
            className={cn(styles.EditCollection, className)}
        >
            children
        </div>
    )
}