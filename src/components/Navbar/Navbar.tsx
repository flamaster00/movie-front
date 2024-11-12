import Link from 'next/link'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link className={styles.link} href='/'>Подборки</Link>
      <input className={styles.search} type="search" name="search" id="search" />
      <Link className={styles.create} href='/'>Создать</Link>
      <Link className={styles.profile} href='/auth'>Войти</Link>
    </nav>
  )
}
