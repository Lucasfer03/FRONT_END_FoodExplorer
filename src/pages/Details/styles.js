import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Content = styled.div`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  max-width: 1500px ;
  margin: 0 auto;
  padding: 35px;

  h1 {
    font-family: Poppins;
    font-weight: 500;
    margin-bottom: 35px;
  }

  table {
    width: 100%;
    border-spacing: 0;
  }
 
  table th {
    color: ${({ theme }) => theme.COLORS.TITLE};
    text-align: left;
    padding: 21px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  > table th:first-child {
    border-top-left-radius: 8px;
  }

  table th:last-child {
    border-top-right-radius: 8px;
  }

  table td {
    text-align: left;
    padding: 21px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: Roboto;
    font-weight: 400;
    border: 1px solid rgba(255, 255, 255, 0.2);

    > svg {
      margin-right: 8px;
    }
  }
`;