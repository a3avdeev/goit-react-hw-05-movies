import { Link, NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fetchDetails } from '../../services/fetchFilms';
import { IoArrowBackSharp } from 'react-icons/io5';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const getMovie = async () => {
            setError(null)
            setState(null)

        try {
            const data = await fetchDetails(movieId)
            setState(data)

        } catch (error) {
            setError(error)
        }
    }
        getMovie();
    }, [movieId])

    if (!state) return null

    const isMovies = error || !state;
    const goBackLink = location.state?.from ?? '/movies';

    return (
        <>
            {isMovies && <p>Sorry, something went wrong</p>}
            <NavLink to={goBackLink}><IoArrowBackSharp /> Go Back</NavLink>
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
                <div>
                    <h4>Additional information</h4>
                    <ul>
                        <li>
                            <Link to="cast" state={{from: goBackLink}}>Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews" state={{from: goBackLink}}>Reviews</Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    );
};