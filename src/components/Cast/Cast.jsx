import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from '../../services/fetchFilms';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            setError(null)
            setCast(null)

            try {
                const data = await fetchCredits(movieId)

                setCast(data)

            } catch (error) {
                setError(error)
            }
        }
        getMovie();
    }, [movieId]);

    const isMovie = cast?.length === 0 || error;

    return (
        <ul>
            {isMovie && <p>We don't have any actors information for this movie</p>}
            {cast?.map(({id, profile_path, character, name}) => <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy"/>
            <div>
                <p>{name}</p>
                <p>Character: {character}</p>
            </div>
            </li>
        )}
        </ul>
    )
}
