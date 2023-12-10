import styles from './Select.module.scss';
import { classNames } from '../../../lib/classNames.ts';
import { ChangeEvent, FC, SelectHTMLAttributes} from 'react'; // Import ChangeEvent

export type tSortOptions = {
    value: string,
    name: string
}

interface iSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    defaultValue: string;
    options: tSortOptions[];
    value: string;
}

export const Select: FC<iSelectProps> = (props) => {
    const {className, defaultValue, options, value, onChange} = props;

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <select
            value={value}
            onChange={handleChange}
            className={classNames(styles.Select, {}, [className!])}
        >
            <option disabled value="">
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};
