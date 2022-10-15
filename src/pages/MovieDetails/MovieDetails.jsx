import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect, Suspense } from 'react';
import { fetchDetails } from '../../services/fetchFilms';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Loader } from '../../components/Loader/Loader';
import { MovieWrapper, BackLink, AdditionalWrapper } from './MovieDetails.Styled';

export default function MovieDetails() {
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

    const goBackLink = location.state?.from ?? '/movies';

    return (
        <>
            {error && <p>Sorry, something went wrong</p>}
            <BackLink to={goBackLink}><IoArrowBackSharp /> Go Back</BackLink>
            <MovieWrapper>
                <img src={state.poster_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="" />
                <div>
                    <h1>{state.title}</h1>
                    <p>User score: {(state.vote_average * 10).toFixed(0)}%</p>
                    <h2>Overwiew</h2>
                    <p>{state.overview}</p>
                    <h3>Genres</h3>
                    <p>{state.genres.map(({ name }) => `${name}`).join(', ')}</p>
                </div>
            </MovieWrapper>
            <AdditionalWrapper>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to="cast" state={{ from: goBackLink }}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{ from: goBackLink }}>Reviews</Link>
                    </li>
                </ul>
            </AdditionalWrapper>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};