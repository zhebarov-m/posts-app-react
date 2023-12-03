import styles from './Button.module.scss'
import {classNames} from "../../../lib/classNames.ts";
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

type tButtonType = 'submit' | 'reset' | undefined
interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
    type?: tButtonType
}

export const Button:FC<iButtonProps> = (props) => {
    const {className, children, type, ...buttonProps } = props
    return (
        <button type={type} {...buttonProps} className={classNames(styles.Button, {}, [className!])}>
            {children}
        </button>
    );
};