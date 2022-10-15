import styled from 'styled-components';

export const DivStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 24px;
`;

export const SearchbarStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 10px;

    &::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }

  & button {
    width: 40px;
    height: 40px;
    border: 0;
    cursor: pointer;
  }
`;
