import {
  Container,
  Content,
  Photo,
  Left,
  Description,
  Ingredients,
  Ingredient1,
  Ingredient2,
  Ingredient3,
  Ingredient4,
  DscpFooter,
  Value,
  Total,
  Add
} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Selected() {
  return (
    <Container>
      <Header />
      <Content>
        <Left>
          <h1>
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1683 0.292893C12.5588 0.683417 12.5588 1.31658 12.1683 1.70711L2.8754 11L12.1683 20.2929C12.5588 20.6834 12.5588 21.3166 12.1683 21.7071C11.7778 22.0976 11.1446 22.0976 10.7541 21.7071L0.754075 11.7071C0.363551 11.3166 0.363551 10.6834 0.754075 10.2929L10.7541 0.292893C11.1446 -0.0976311 11.7778 -0.0976311 12.1683 0.292893Z"
                fill="white"
              />
            </svg>
            Voltar
          </h1>
          <Photo />
        </Left>
        <Description>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <Ingredients>
            <div>
              <Ingredient1 />
              <p>Alface</p>
            </div>
            <div>
              <Ingredient2 />
              <p>Tomate</p>
            </div>
            <div>
              <Ingredient3 />
              <p>Rabanete</p>
            </div>
            <div>
              <Ingredient4 />
              <p>Pão naan</p>
            </div>
          </Ingredients>
          <DscpFooter>
            <Value>
              <h1>R$ 25,97</h1>
            </Value>
            <Total>
                <svg
                  width="19"
                  height="3"
                  viewBox="0 0 19 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.480713 1.38867C0.480713 0.974458 0.816499 0.638672 1.23071 0.638672H17.7307C18.1449 0.638672 18.4807 0.974458 18.4807 1.38867C18.4807 1.80289 18.1449 2.13867 17.7307 2.13867H1.23071C0.816499 2.13867 0.480713 1.80289 0.480713 1.38867Z"
                    fill="white"
                  />
                </svg>
                01
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.480713 9.38867C0.480713 8.97446 0.816499 8.63867 1.23071 8.63867H17.7307C18.1449 8.63867 18.4807 8.97446 18.4807 9.38867C18.4807 9.80289 18.1449 10.1387 17.7307 10.1387H1.23071C0.816499 10.1387 0.480713 9.80289 0.480713 9.38867Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.48071 0.388672C9.89493 0.388672 10.2307 0.724458 10.2307 1.13867V17.6387C10.2307 18.0529 9.89493 18.3887 9.48071 18.3887C9.0665 18.3887 8.73071 18.0529 8.73071 17.6387V1.13867C8.73071 0.724458 9.0665 0.388672 9.48071 0.388672Z"
                    fill="white"
                  />
                </svg>
            </Total>
            <Add>
            <Button title="incluir" style={{width: "92px"}}/>
            </Add>
          </DscpFooter>
        </Description>
      </Content>
      <Footer />
    </Container>
  );
}
