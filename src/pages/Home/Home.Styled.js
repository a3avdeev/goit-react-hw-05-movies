import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  & h1 {
    margin: 0;
  }

  & ul {
    padding-left: 20px;

    & li {
      margin-bottom: 4px;
    }
  }
`;
