import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};

  border-radius: 5px;

  > input {
    height: 48px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.TEXT};
    background: transparent;
    border: 0;

    &:placeholder {
        color: ${({ theme }) => theme.COLORS};
    }
  }

  > svg {
        margin-left:16px;
        color: ${({ theme }) => theme.COLORS.TEXT};
    }
`;