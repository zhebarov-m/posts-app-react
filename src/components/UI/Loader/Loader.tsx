import styles from './Loader.module.scss'
import {classNames} from "../../../lib/classNames.ts";
import {FC} from "react";

interface iLoaderProps {
    className?: string,
}

export const Loader: FC<iLoaderProps> = (props) => {
    const {className} = props

    return (
        <div className={classNames(styles.Loader, {}, [className ?? ''])}>
            <div className={styles.ldsHourglass}></div>
            <h3>Загрузка постов...</h3>
        </div>
    );
};