import Searchbar from '../../components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from '../../services/fetchFilms';
import { MovieList } from '../../components/MovieList/MovieList';
import { toast } from 'react-toastify';

export const Movies = () => {
    // const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    // const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const queryParam = searchParams.get('query') ?? '';

    // const hadleFormSubmit = input => {
    //     if (input !== inputValue) {
    //         setInputValue(input);
    //     }
    // };

    const changeQuery = value => {
    setSearchParams(value !== '' ? {query: value } : {})
  }

    useEffect(() => {
    if (queryParam === '') {
      return
    }

    const getMovies = async () => {
    // setLoading(true)

    try {
      const data = await fetchSearch(queryParam)

      if (data.length === 0) {
        setItems([])
        return toast(`Sorry, we hadn't found movies for "${queryParam}", please, enter another query :)`)
      }

      setItems([...data])

    } catch (error) {
    //   setError(error)
    }
    // finally {
    //   setLoading(false)
    // }
  }
    getMovies();
  }, [queryParam])

  const isData = items.length > 0;

    return (
      
    <main>
            <h1>Movies page</h1>
            <Searchbar onSubmit={changeQuery} value={queryParam} />
            {isData && <MovieList items={items} />}
    </main>
  );
};