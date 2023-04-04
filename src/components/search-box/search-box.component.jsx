import {SearchBoxElement} from './search-box.styles';

const SearchBox = ({className, type, placeholder, onChangeHandler}) => (

    <SearchBoxElement
        className={`search-box ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)
export default SearchBox;