import LoginForm from '@/pages/auth/AuthForm/LoginForm.tsx/LoginForm'
import styles from './Auth.module.scss'

const Auth = () => {

  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  )
}

export default Auth;