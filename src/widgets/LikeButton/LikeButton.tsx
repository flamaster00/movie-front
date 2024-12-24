import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import IconLikesBtn from '@/shared/static/icons/icon_favorite.svg'
import cn from 'classnames'
import styles from './LikeButton.module.scss'

type LikeButtonProps = {
    className?: string
}

export const LikeButton = (props: LikeButtonProps) => {
    const {className} = props
    return (
        <Button className={cn(styles.likeBtn, className)} variant={ButtonVariant.CLEAR} shape={ButtonShape.ICON}>
            <IconLikesBtn />
        </Button>
    )
}
