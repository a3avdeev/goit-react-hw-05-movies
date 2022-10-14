import Searchbar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from '../../services/fetchFilms';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const inputValue = searchParams.get('query') ?? '';

    useEffect(() => {
        if (inputValue === '') {
            return
        }

        const getMovies = async () => {
            setLoading(true);
            try {
                const data = await fetchSearch(inputValue);
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
            }, [inputValue]);

    const hadleFormSubmit = value => {
        setSearchParams(value !== '' ? { query: value } : {});
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