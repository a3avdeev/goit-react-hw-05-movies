import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from '../../services/fetchFilms';
import { ActorCards } from './Cast.Styled';

export default function Cast() {
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
        <ActorCards>
            {isMovie && <p>We don't have any actors information for this moment</p>}
            {cast?.map(({ id, profile_path, character, name }) => <li key={id}>
                <img src={profile_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy" />
                <div>
                    <p><b>{name}</b></p>
                    <p>Character: {character}</p>
                </div>
            </li>
            )}
        </ActorCards>
    );
}
