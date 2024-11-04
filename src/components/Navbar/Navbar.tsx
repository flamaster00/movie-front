import Link from 'next/link'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link href='/'>Подборки</Link>
    </nav>
  )
}
