import { Navbar } from '@/components/Navbar/Navbar'
import styles from './Auth.module.scss'
import { AuthForm } from '@/components/AuthForm/AuthForm'

export const Auth = () => {


  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <AuthForm />
      </main>
    </>
  )
}
