import { fetchTrending } from '../../services/fetchFilms';
import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {

    
    const [items, setItems] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchTrending()

                setItems([...data])

            } catch (error) {
                // setError(error)
            }
        }
        fetchMovies();
    }, [])

    return (
        <main>
            <div>
                <h1>Trending today</h1>
                <MovieList items={items} />
            </div>
        </main>
    );
};