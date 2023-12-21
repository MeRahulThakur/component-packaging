import React, { ChangeEventHandler } from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => React.JSX.Element;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: ({ id, disabled, label, message, error, success, onChange, placeholder, ...props }: InputProps) => React.JSX.Element;

export { Button, Input };
