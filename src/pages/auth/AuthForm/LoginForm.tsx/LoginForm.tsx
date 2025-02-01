import { useForm, SubmitHandler } from "react-hook-form"
import { Button, ButtonShape, ButtonVariant } from '@/shared/ui/Button/Button'
import cn from 'classnames'
import styles from './LoginForm.module.scss'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { login, registration, TRegistrationRequest, TResponseError, userActions } from "@/entities/user"
import { useAppDispatch } from "@/app/store/hooks"
import IconShown from '@/shared/static/icons/icon_visibility.svg'
import IconNotShown from '@/shared/static/icons/icon_visibility_off.svg'
import { setTimeout } from "timers"

// TODO refactor to register and login
type Inputs = TRegistrationRequest

type LoginFormProps = {
    className?: string,
}

const LoginForm = (props: LoginFormProps) => {

    const dispatch = useAppDispatch()

    const { className } = props
    const [responseError, setResponseError] = useState<TResponseError | null>(null)
    const [successMsg, setSuccessMsg] = useState('')
    const [isSignUp, setIsSugnUp] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const router = useRouter()

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
        setResponseError(null)
        try {
            const user = await registration(data)
            dispatch(userActions.setAuthData(user))
            setSuccessMsg('Вы успешно зарегестрированы')
            setTimeout(() => {
                setSuccessMsg('')
                router.push('/')
            }, 1000)
        } catch (e) {
            if (e instanceof Error) {
                let error = JSON.parse(e.message) as TResponseError
                setResponseError(error)
            } else {
                setResponseError(new Error('Непредвиденная ошибка'))
            }
        }
    }

    const onSignInSubmit: SubmitHandler<Inputs> = async (data) => {
        setResponseError(null)
        try {
            const user = await login(data)
            dispatch(userActions.setAuthData(user))
            setSuccessMsg('Вы успешно вошли в аккаунт')
            setTimeout(() => {
                setSuccessMsg('')
                router.push('/')
            }, 1000)
        } catch (e) {
            if (e instanceof Error) {
                let error = JSON.parse(e.message) as TResponseError
                setResponseError(error)
            } else {
                setResponseError(new Error('Непредвиденная ошибка'))
            }
        }
    }

    const switchLoginOrRegisterHandler = () => {
        setIsSugnUp(prev => !prev)
        reset({
            username: '',
            email: '',
            password: ''
        })
        setResponseError(null)
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                username: '',
                email: '',
                password: ''
            })
        }
    }, [])

    return (
        <form
            onSubmit={isSignUp ? handleSubmit(onSignUpSubmit) : handleSubmit(onSignInSubmit)}
            className={cn(styles.loginForm, className)}>
            {isSignUp &&
                <>
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        placeholder='user'
                        id='username'
                        className={cn(
                            styles.loginInput,
                            { [styles.inputError]: errors?.username?.message }
                        )}
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
                placeholder='user@mail.ru'
                id='email'
                className={cn(styles.loginInput,
                    { [styles.inputError]: errors?.email?.message }
                )}
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
            <div className={styles.inputContainer}>

                <input
                    placeholder='password'
                    id='password'
                    className={cn(styles.passwordInput,
                        { [styles.inputError]: errors?.password?.message }
                    )}
                    type={isShowPassword ? 'text' : 'password'}
                    {...register("password", { required: 'Поле обязательно' })} />

                <Button
                    className={styles.showPasswordBtn}
                    onClick={() => setIsShowPassword(prev => !prev)}
                    shape={ButtonShape.ICON}
                    variant={ButtonVariant.CLEAR}
                >
                    {
                        isShowPassword ?
                            <IconShown className={cn(styles.showPasswordBtnIcon, styles.show)} />
                            : <IconNotShown className={cn(styles.showPasswordBtnIcon)} />
                    }
                </Button>
            </div>
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
            {responseError &&
                <div className={styles.responseError}>
                    <p className={styles.errorText}>{responseError?.message}</p>
                </div>
            }
            {successMsg.length > 0 &&
                <div className={styles.successMsg}>
                    <p className={styles.successText}>{successMsg}</p>
                </div>
            }
        </form>
    )
}

export default LoginForm