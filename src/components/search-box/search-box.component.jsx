import React, { useEffect } from 'react';

import './search-box.styles.scss';

import { ReactComponent as Search } from '../../assets/search-black.svg';
import FormInput from '../form-input/form-input.component';

const SearchBox = ({ searchText = '', onChangeHandler, onSearchHandler }) => {

    useEffect(() => {
        let searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                onSearchHandler();
            }
        });
    });
    return (
        <div className='search-box' >
            <Search className='search-logo' onClick={onSearchHandler} id={"searchIcon"} />
            <FormInput
                name="text"
                type="text"
                value={searchText}
                handleChange={onChangeHandler}
                label='Search'
                id="searchInput"
            />
            <div className='filter-item'>

            </div>
        </div>
    )

}

export default SearchBox;