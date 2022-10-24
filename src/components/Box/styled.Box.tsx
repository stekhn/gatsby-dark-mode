import styled from "styled-components";

export const Box = styled.div`
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background};
    border: ${({ theme }) => `1rem solid ${theme.border}`};
    padding: 1rem;

    p {
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
`