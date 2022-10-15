import styled from 'styled-components';

export const ActorCards = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: -10px;

  & li {
    max-width: 200px;
    min-height: 300px;
    margin-left: 32px;
    margin-top: 32px;
    object-fit: cover;

    & img {
      max-width: 200px;
      height: 300px;
    }
  }
`;
