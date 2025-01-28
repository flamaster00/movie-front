import { SearchBar } from '@/widgets/SearchBar'
import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { getUserAuthData, userActions } from '@/entities/user'
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import { useRouter } from 'next/router'
import { MiniProfile } from '@/features/MiniProfile'

export const Navbar = () => {
  const router = useRouter()

  const userAuthData = useAppSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(userActions.logout())
  }


  return (
    <nav className={styles.Navbar}>
      <AppLink href={'/'} className=''>Все коллекции</AppLink>
      <SearchBar placeholder={''} />
      <AppLink
        href={'/create'}
      >Создать</AppLink>
      {userAuthData ?
        <MiniProfile />
        : <AppLink href={'/auth'}>Войти</AppLink>
      }
      
    </nav>
  )
}
