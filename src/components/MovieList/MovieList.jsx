import { NavLink, useLocation } from 'react-router-dom';

export const MovieList = ({ items }) => {
    const location = useLocation();

    return (items?.map(({id, title, name}) => <li key={id}>
                        <NavLink to={`/movies/${id}`} state={{from: location}}>{title || name}</NavLink>
                    </li>
                ));
    
};



