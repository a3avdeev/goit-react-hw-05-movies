import Searchbar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from '../../services/fetchFilms';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const Movies = () => {
    const [inputValue, setInputValue] = useSearchParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const queryParam = inputValue.get('query') ?? '';

    useEffect(() => {
        if (queryParam === '') {
            return
        }

        const getMovies = async () => {
            setLoading(true);
            try {
                const data = await fetchSearch(queryParam);
                if (data.length === 0) {
                        toast.warn ("Sorry, there are no matching your search query", {
                        theme: "colored"
                    })
                    }
                else {
                    setItems((items) => 
                        [...items, ...data])
                }
            } catch (error) {
                setError(error);
                }
            finally {
                setLoading(false);
                }
            }
                getMovies();
            }, [queryParam]);
    
    // const hadleFormSubmit = input => {
    //     if (input !== inputValue) {
    //         setInputValue(input);
    //         setItems([]);
    //     }
    // };

    const hadleFormSubmit = value => {
        setInputValue(value !== '' ? { query: value } : {});
        setItems([]);
    }

    const isMovies = items.length !== 0;

    return (
        <div>
            <Searchbar onSubmit={hadleFormSubmit} />
            {loading && <Loader />}
            {error && <p>Please try again later</p>}
            {isMovies && <MovieList items={items} />}
            <ToastContainer autoClose={3000} />
        </div>
    );
};