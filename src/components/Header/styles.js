import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 37px;
`;

export const Text = styled.header`
  width: 140px;
  font-family: Roboto;
  font-size: 400;
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 5px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Polygon = styled.header`
  display: flex;
  text-align: center;
  align-items: center;
  margin-right: 38px;

  > p {
    margin-left: 12px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 26px;
    line-height: 29px;
    color: ${({ theme }) => theme.COLORS.TITLE};
  }
`;

export const Search = styled.header`
  width: 410px;
  margin-right: 32px;
`;