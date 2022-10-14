import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { BsSearch } from 'react-icons/bs';
import PropTypes from "prop-types";
import { SearchbarStyled, HeaderStyled } from './SearchBar.Styled';

export default function Searchbar({ onSubmit }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            
            return toast.error("Please, input something", {
                theme: "colored"
            });
        }

        onSubmit(inputValue);
        setInputValue(inputValue);
    }

    return (
            <HeaderStyled>
                <SearchbarStyled onSubmit={handleSubmit}>
                    <button type="submit">
                        <BsSearch />
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="movies search"
                        value={inputValue}
                        onChange={handleInputChange}
                        name='inputValue'
                    />
                </SearchbarStyled>
            </HeaderStyled>
        );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
