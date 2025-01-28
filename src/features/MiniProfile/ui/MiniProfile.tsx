import cn from 'classnames'
import styles from './MiniProfile.module.scss'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useState } from 'react'
import { useAppDispatch } from '@/app/store/hooks'
import { userActions, userReducer } from '@/entities/user'

type MiniProfileProps = {
    className?: string
}

export const MiniProfile = (props: MiniProfileProps) => {
    const { className } = props
    const [isShow, setIsShow] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const toggleMenu = () => {
        setIsShow(isShow => !isShow)
    }

    const onClickLogout = () => {
        dispatch(userActions.logout())
    }

    return (
        <>
            <Button
                className={cn(styles.MiniProfile, className)}
                shape={ButtonShape.ROUND}
                onClick={toggleMenu}
            >
                U
            </Button>
            {isShow &&
                <div className={styles.menu}>
                    <AppLink
                        href={'#'}
                        className={cn(styles.fullWidth, styles.option)}
                    >
                        Настройки
                    </AppLink>
                    <AppLink
                        href={'/'}
                        className={cn(styles.fullWidth, styles.option)}
                    >
                        Мои коллекции
                    </AppLink>
                    <Button
                        onClick={onClickLogout}
                        variant={ButtonVariant.CLEAR}
                        shape={ButtonShape.TEXT}
                        className={cn(styles.fullWidth, styles.option, styles.logout)}
                    >
                        Выйти
                    </Button>
                </div>
            }
        </>
    )
}