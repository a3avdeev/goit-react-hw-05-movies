import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fetchDetails } from '../../services/fetchFilms';
import { IoArrowBackSharp } from 'react-icons/io5';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [state, setState] = useState(null);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            // setError(null)
            setState(null)

        try {
            const data = await fetchDetails(movieId)

            setState(data)

        } catch (error) {
            // setError(error)
        }
    }
        getMovie();
    }, [movieId])

    if (!state) return null

    return (
        <>
            <NavLink to='/movies'><IoArrowBackSharp /> Go Back</NavLink>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="" />
                <div>
                    <h1>{state.title}</h1>
                    <p>User score: {state.vote_average}</p>
                    <h2>Overwiew</h2>
                    <p>{state.overview}</p>
                    <h3>Genres</h3>
                    <p>{state.genres.map(({ name }) => `${name}`).join(', ')}</p>
                </div>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </>
    );
};