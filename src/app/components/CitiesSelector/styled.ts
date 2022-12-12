import styled from 'styled-components';

export const CitiesSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.selectorBgColor};
  border-radius: 3rem;
  margin-top: 1.5rem; /* 24px */
  margin-bottom: 1.5rem; /* 24px */
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  button {
    color: ${({ theme }) => theme.appTitleColor};
    font-size: 1.125rem; /* 18px */
    line-height: 3rem; /* 28px */
    border-radius: 3rem; /* 48px */
    height: 100%;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 0.2s;
  }
`;
