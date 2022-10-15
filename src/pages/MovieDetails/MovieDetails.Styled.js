import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 24px;
  text-decoration: none;
  max-width: 100px;

  & svg {
    margin-right: 4px;
    width: 1.3em;
    height: 1.3em;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;

  & img {
    max-width: 300px;
    height: auto;
  }

  & div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    & h1,
    h2,
    h3,
    p {
      margin-top: 0;
      margin-bottom: 14px;
    }
  }
`;

export const AdditionalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 24px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & h4 {
    margin-top: 10px;
    margin-bottom: 4px;
  }

  & ul {
    margin-top: 6px;
    margin-bottom: 10px;
    padding-left: 20px;

    & li {
      margin-bottom: 4px;
    }
  }
`;
