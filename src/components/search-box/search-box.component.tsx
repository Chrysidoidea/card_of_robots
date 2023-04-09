import {SearchBoxElement} from './search-box.styles';
import {ChangeEvent} from "react";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    type: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


const SearchBox = ({className, type, placeholder, onChangeHandler}: SearchBoxProps) => (

    <SearchBoxElement
        className={`search-box ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)
export default SearchBox;