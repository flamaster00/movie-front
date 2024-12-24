import { LoginForm } from '@/pages/auth/AuthForm/LoginForm.tsx/LoginForm'
import styles from './Auth.module.scss'

export const Auth = () => {


  return (
    <>
      <main className={styles.wrapper}>
        <LoginForm />
      </main>
    </>
  )
}
