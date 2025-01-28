import cn from 'classnames'
import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss'
import { ChangeHandler } from 'react-hook-form';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export type TInputProps = {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  fullWidth?: boolean;
} & HTMLInputProps

export const Input = memo((props: TInputProps) => {
  const {
    className,
    value,
    onChange,
    fullWidth,
    type = 'text',
    ...otherProps
  } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

  return (
      <input
        className={cn(styles.Input, {[styles.fullWidth]: fullWidth}, className)}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
  );
});