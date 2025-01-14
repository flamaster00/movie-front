import { useForm, SubmitHandler } from "react-hook-form"
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import cn from 'classnames'
import styles from './LoginForm.module.scss'
import React, { useEffect, useState } from 'react'
import { backendBaseUrl } from '@/shared/config/backend'

type Inputs = {
    [email: string]: string
    password: string
    username: string
}

type LoginFormProps = {
    className?: string,
}

export const LoginForm = (props: LoginFormProps) => {

    const { className } = props

    const [isSignUp, setIsSugnUp] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<Inputs>({
        mode: 'onBlur',
        reValidateMode: 'onSubmit'
    })

    const onSignUpSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data, typeof data)
        const formData = new FormData()

        for (const key in data) {
                formData.append(key, data[key])
            }
            try {
                const response = await fetch(`${backendBaseUrl}/api/user/registration`,
                    {
                        method: 'POST',
                        body: formData
                    })

                console.log(await response.json());

            } catch (error) {
                console.log(error);

            }
        }

        const switchLoginOrRegisterHandler = () => {
            setIsSugnUp(prev => !prev)
            reset({
                username: '',
                email: '',
                password: ''
            })
        }

        useEffect(() => {
            if (isSubmitSuccessful) {
                reset({
                    username: '',
                    email: '',
                    password: ''
                })
            }
        },
            [])

        return (
            <form
                onSubmit={handleSubmit(onSignUpSubmit)}
                className={cn(styles.loginForm, className)}>
                {isSignUp &&
                    <>
                        <label htmlFor="username">Имя пользователя</label>
                        <input
                            placeholder='user'
                            id='username'
                            className={styles.loginInput}
                            {...register("username",
                                {
                                    required: 'Поле обязательно',
                                    minLength: {
                                        value: 4,
                                        message: 'Минимум 4 символа'
                                    }
                                })}
                        />
                        {errors.username && <span className={styles.errorText}>{errors.username.message}</span>}
                    </>
                }

                <label htmlFor="email">Почта</label>
                <input
                    placeholder='user@example.ru'
                    id='email'
                    className={styles.loginInput}
                    type='email'
                    {...register("email", {
                        required: 'Поле обязательно',
                        pattern: {
                            value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
                            message: 'Неверно указана почта'
                        }
                    })}

                />
                {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}

                <label htmlFor="password">Пароль</label>
                <input
                    placeholder='password'
                    id='password'
                    className={styles.loginInput}
                    type='password'
                    {...register("password", { required: 'Поле обязательно' })} />
                {errors.password && <span className={styles.errorText}>{errors.password.message}</span>}

                <div className={styles.buttons}>
                    <Button className={styles.register} variant={ButtonVariant.CLEAR} shape={ButtonShape.TEXT} onClick={switchLoginOrRegisterHandler}>
                        {isSignUp
                            ? 'Войти в аккаунт'
                            : 'Регистрация'
                        }
                    </Button>
                    <input type="submit" className={styles.submitInput} value={isSignUp ? 'Регистрация' : 'Войти'} />
                </div>

            </form>
        )
    }