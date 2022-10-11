import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/fetchFilms';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            // setError(null)
            setReviews(null)

        try {
            const data = await fetchReviews(movieId)

            setReviews(data)

        } catch (error) {
        // setError(error)
        }
    }
        getMovie();
    }, [movieId])

    return (
        <ul>
            {reviews?.map(({id, author, content}) => <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
            </li>
        )}
        </ul>
    )
}