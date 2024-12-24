import { LoginForm } from '@/pages/auth/AuthForm/LoginForm.tsx/LoginForm'
import styles from './Auth.module.scss'
import { Navbar } from '@/widgets/Navbar/Navbar'

export const Auth = () => {


  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <LoginForm />
      </main>
    </>
  )
}
