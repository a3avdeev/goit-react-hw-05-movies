import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavItem = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: green;
    color: orange;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
