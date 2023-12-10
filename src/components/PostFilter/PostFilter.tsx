import styles from './PostFilter.module.scss'
import {classNames} from "../../lib/classNames.ts";
import {Dispatch, FC, SetStateAction} from "react";
import {Input} from "../UI/input/Input.tsx";
import {Select} from "../UI/select/Select.tsx";

type tFilter = {
    sort: string,
    query: string
}

interface iPostFilterProps {
    className?: string,
    filter: tFilter,
    setFilter: Dispatch<SetStateAction<tFilter>>
}

export const PostFilter: FC<iPostFilterProps> = (props) => {
    const {className, filter, setFilter} = props

    return (
        <div className={classNames(styles.PostFilter, {}, [className!])}>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <Select
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e.target.value})}
                defaultValue="Сортировка"
                options={[{value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}]}
            />
        </div>
    );
};