import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/fetchFilms';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            setError(null)
            setReviews(null)

            try {
                const data = await fetchReviews(movieId)

                setReviews(data)

            } catch (error) {
                setError(error)
            }
        }
        getMovie();
    }, [movieId]);

    const isMovie = reviews?.length === 0 || error;

    return (
        <ol>
            {isMovie && <p>We don't have any reviews for this movie</p>}
            {reviews?.map(({id, author, content}) => <li key={id}>
            <p>Author: <b>{author}</b></p>
            <p>{content}</p>
            </li>
        )}
        </ol>
    )
}