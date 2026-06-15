import { FaAngleDown } from 'react-icons/fa';
import ui from '../pos.module.css'

type SelectFilterProps = {
    selected: string;
    allTitle: string;
    list: string[];
    onChange: (value: string) => void;
};

export function SelectFilter({
    selected,
    allTitle,
    list,
    onChange
}: SelectFilterProps) {
    return (
        <div className={ui.filterContainer}>
            <select
                value={selected}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">{allTitle}</option>

                {list.map(item => (
                    <option
                        key={item}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>

            <FaAngleDown />
        </div>
    );
}