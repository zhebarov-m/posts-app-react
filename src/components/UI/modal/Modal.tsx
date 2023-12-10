import styles from './Modal.module.scss'
import {classNames} from "../../../lib/classNames.ts";
import {FC, ReactNode} from "react";
import {usePostsStore} from "../../../zustand/store.ts";

interface iModalProps {
    className?: string,
    children: ReactNode,
}

export const Modal: FC<iModalProps> = (props) => {
    const {className, children} = props
    const modalObj = usePostsStore(state => ({
        modal: state.modal,
        setModal: state.setModal
    }))


    return (
        <div
            onClick={() => modalObj.setModal(false)}
            className={classNames(styles.Modal, {[styles.active]: modalObj.modal}, [className ?? ''])}
        >
            <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};