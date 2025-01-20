import { SearchBar } from '@/widgets/SearchBar'
import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <AppLink href={'/'} className=''>Все коллекции</AppLink>
      <SearchBar placeholder={''} />
      <AppLink href={'/create'}>Создать</AppLink>
      <AppLink href={'/auth'}>Войти</AppLink>
    </nav>
  )
}
