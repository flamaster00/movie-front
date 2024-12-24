import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Button } from '@/shared/ui/Button/Button'
import SearchBar from '../SearchBar/SearchBar'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <AppLink href={'/'} className=''>Все коллекции</AppLink>
      <SearchBar />
      <AppLink href={'/create'}>Создать</AppLink>
      <Button>Войти</Button>
    </nav>
  )
}
