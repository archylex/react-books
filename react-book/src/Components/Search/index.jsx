import React from "react";
import debounce from "lodash.debounce";

import styles from './Search.module.scss';

export const Search = ({searchValue, setSearchValue}) => {
    const [value, setValue] = React.useState();

    const onChangeInput = e => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    }
    
    const updateSearchValue = React.useCallback(
        debounce(s => {
            setSearchValue(s);
        }, 1000),
        [],
    );

    return (
        <input 
            value={value}
            onChange={onChangeInput}
            className={styles.root} 
            type="search" 
            placeholder="Введите название книги" />
    )
}