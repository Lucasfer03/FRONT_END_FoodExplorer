import styled from 'styled-components';

export const Container = styled.button`
  width: auto;
  background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 37px;
  gap: 11px;
  padding: 0px 12px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
  font-family: Poppins;
  font-size: 500;

  &:disabled {
    opacity: 0.5;
  }
`;