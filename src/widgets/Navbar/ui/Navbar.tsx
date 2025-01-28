import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useAppSelector } from '@/app/store/hooks'
import { getUserAuthData } from '@/entities/user'
import { MiniProfile } from '@/features/MiniProfile'

export const Navbar = () => {

  const userAuthData = useAppSelector(getUserAuthData)

  return (
    <nav className={styles.Navbar}>
      <AppLink href={'/'} className=''>Все коллекции</AppLink>
      {/* <SearchBar placeholder={''} /> */}
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
