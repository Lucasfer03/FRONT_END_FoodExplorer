import styled from "styled-components";
import salada from "../../assets/salada.png";
import alface from "../../assets/alface.png";
import tomate from "../../assets/tomate.png";
import rabanete from "../../assets/rabanete.png";
import pao from "../../assets/pão.png";

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
  display: flex;

  h1 {
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 42px;

    > svg {
        margin-right: 11px;
    }
  }
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;

  background: url(${salada}) no-repeat center center;
  background-size: cover;
  width: 390px;
  height: 390px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  margin-top: 120px;
  margin-left: 41px;
  max-width: 600px;

  > h1 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 40px;
    line-height: 56px;
    color: ${({ theme }) => theme.COLORS.TITLE};
  }

  > p {
    font-family: Poppins;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: ${({ theme }) => theme.COLORS.TITLE};
  }
`;

export const Ingredients = styled.div`
  display: flex;
  text-align: center;
  margin-top: 27px;

  > div {
    margin-right: 16px;
  }

  > p {
    font-family: Poppins;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Ingredient1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;

  background: url(${alface}) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
`;

export const Ingredient2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;

  background: url(${tomate}) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
`;

export const Ingredient3 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;

  background: url(${rabanete}) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
`;

export const Ingredient4 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;

  background: url(${pao}) no-repeat center center;
  background-size: cover;
  width: 60px;
  height: 60px;
`;

export const DscpFooter = styled.div`
  display: flex;  
`;

export const Value = styled.div`
  font-family: Roboto;
  font-weight: 400;
  font-size: 32px;
  line-height: 51px;
  color: ${({ theme }) => theme.COLORS.VALUE};
  margin-right: 53px;
  margin-top: 48px;

`;

export const Total = styled.div`
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;

    > svg {
      margin-left: 17px;
      margin-right: 17px;
    }
`;

export const Add = styled.div`
  margin-top: 48px;
  margin-left: 24px;
`;