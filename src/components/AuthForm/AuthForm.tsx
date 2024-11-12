import Form from 'next/form'
import { FormEvent } from 'react'
import styles from './AuthForm.module.scss'

export const AuthForm = () => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Form action="/login" onSubmit={onSubmit} className={styles.authForm}>
            <input type="text" placeholder='Логин' className={styles.authInput} />
            <input type="password" name="password" id="password" placeholder='Пароль' className={styles.authInput} />
            <div className={styles.submitWrapper}>
                <span className={styles.recover}>Восстановить пароль</span>
                <input type="submit" value="Войти" id='submit' className={styles.submitInput} />
            </div>
        </Form>
    )
}