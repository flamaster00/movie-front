import Form from 'next/form'
import { useForm, SubmitHandler } from "react-hook-form"
import styles from './LoginForm.module.scss'

type Inputs = {
    email: string
    password: string
    username: string
}

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("email")) // watch input value by passing the name of it

    return (
        <Form action="/login" onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <label htmlFor="email">Почта</label>
            <input placeholder='user@example.ru' id='email' className={styles.loginInput} {...register("email", { required: true })} />
            {errors.email && <span className={styles.errorText}>Поле обязательно</span>}

            <label htmlFor="password">Пароль</label>
            <input placeholder='password' id='password' className={styles.loginInput} {...register("password", { required: true })} />
            {errors.password && <span className={styles.errorText}>Поле обязательно</span>}

            <input type="submit" className={styles.submitInput} value={'Войти'} />
        </Form>
    )
}