import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ items }) => {
    const location = useLocation();

    return (items?.map(({id, title, name}) => <li key={id}>
                        <NavLink to={`/movies/${id}`} state={{from: location}}>{title || name}</NavLink>
                    </li>
                ));
    
};

MovieList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string,
        }
    )),
}

