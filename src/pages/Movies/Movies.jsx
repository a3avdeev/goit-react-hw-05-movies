import Searchbar from '../../components/SearchBar/SearchBar';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export const Movies = () => {
    const [inputValue, setInputValue] = useState('');

    const hadleFormSubmit = input => {
        if (input !== inputValue) {
            setInputValue(input);
        }
    };

    return (
      
    <main>
            <h1>Movies page</h1>
            <Searchbar onSubmit={hadleFormSubmit} />
            <button type="submit">
                <BsSearch />
            </button>

    </main>
  );
};