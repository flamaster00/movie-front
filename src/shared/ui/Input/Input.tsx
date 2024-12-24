import cn from 'classnames'
import React, { InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export type TInputProps = {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
} & HTMLInputProps

export const Input = memo((props: TInputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
      <input
        className={cn(styles.Input, className)}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
  );
});