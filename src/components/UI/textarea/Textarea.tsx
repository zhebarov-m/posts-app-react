import styles from './Textarea.module.scss'
import {classNames} from "../../../lib/classNames.ts";
import {FC, TextareaHTMLAttributes} from "react";

interface iTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?: string
}

export const Textarea:FC<iTextareaProps> = (props) => {
    const {className, ...textareaProps} = props

    return (
        <textarea {...textareaProps} className={classNames(styles.Textarea, {}, [className!])} />
    );
};