import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  flex-direction: row;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & nav {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: bold;

  &.active {
    background-color: #ff1493;
    color: #fff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
