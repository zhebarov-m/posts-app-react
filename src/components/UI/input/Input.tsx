import styles from './Input.module.scss'
import {classNames} from "../../../lib/classNames.ts";
import {FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string,
}

export const Input:FC<InputProps> = (props) => {
    const {className, type, ...inputProps} = props

    return (
        <input {...inputProps} className={classNames(styles.Input, {}, [className!])} />
    );
};