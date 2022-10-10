import { Outlet, Link  } from 'react-router-dom';

export const SharedLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="movies">Movies</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}