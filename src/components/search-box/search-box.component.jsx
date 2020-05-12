import React from 'react';

import './search-box.styles.scss';

import { ReactComponent as Search } from '../../assets/search-black.svg';
import FormInput from '../form-input/form-input.component';

const SearchBox = ({searchText='', onChangeHandler , onSearchHandler}) => {
    return (
        <div className='search-box' >
            <Search className='search-logo' onClick={onSearchHandler} />
            <FormInput
                name="text"
                type="text"
                value={searchText}
                handleChange={onChangeHandler}
                label='Search'
            />
        </div>
    )

}

export default SearchBox;