import cn from 'classnames'
import styles from './Textarea.module.scss'
import { ChangeEvent, TextareaHTMLAttributes } from 'react';

type HTMLTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

export type TTextareaProps = {
    className?: string;
    value?: string;
    readonly?: boolean
    onChange?: (value: string) => void;
} & HTMLTextAreaProps

export const Textarea = (props: TTextareaProps) => {
    const { className, value, onChange, readonly = true, ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            readOnly={readonly}
            value={value}
            onChange={onChangeHandler}
            rows={1}
            className={cn(styles.Textarea,
                { [styles.readonly]: readonly },
                className)}
            {...otherProps}
        >
        </textarea>
    )
}