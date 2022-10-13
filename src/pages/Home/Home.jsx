import { fetchTrending } from '../../services/fetchFilms';
import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const data = await fetchTrending()

                setItems([...data])

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    const isMovies = items.length !== 0;

    return (
        <main>
            <div>
                <h1>Trending today</h1>
                {loading && <Loader />}
                {error && <p>Please try again later</p>}
                {isMovies && <MovieList items={items} />}
            </div>
        </main>
    );
};