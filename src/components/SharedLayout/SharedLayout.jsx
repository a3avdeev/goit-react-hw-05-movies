import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from "react";
import { Loader } from '../Loader/Loader';
import {HeaderStyled, NavItem} from './SharedLayout.Styled'

export const SharedLayout = () => {
    return (
        <>
            <HeaderStyled>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="movies">Movies</NavLink>
                </NavItem>
            </HeaderStyled>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};