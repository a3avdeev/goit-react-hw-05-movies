import { fetchTrending } from '../../services/fetchFilms';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const Home = () => {
    const location = useLocation();
    
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
        <h1>Welcome</h1>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            laboriosam placeat incidunt rem illum animi nemo quibusdam quia
            voluptatum voluptate.
        </p>

            <div>
                {items?.map(({id, title, name}) => <li key={id}>
                        <NavLink to={`/movies/${id}`} state={{from: location}}>{title || name}</NavLink>
                    </li>
                )}
            </div>
        </main>
    );
};