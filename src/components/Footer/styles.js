import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  height: 125px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Polygon = styled.footer`
  display: flex;
  text-align: center;
  align-items: center;
  margin-right: 38px;
  margin-left: 123px;

  > p {
    margin-left: 12px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 26px;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const Text = styled.footer`
  display: flex;
  text-align: center;
  align-items: center;
  margin-right: 123px;
  font-family: DM Sans, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
