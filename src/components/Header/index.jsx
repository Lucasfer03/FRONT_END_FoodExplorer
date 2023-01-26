import { Container, Polygon, Text, Search } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../input";
import Logout from "../../svgs/svglogout"
import { FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <Polygon>
        <svg
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z"
            fill="#065E7C"
          />
        </svg>
        <p>Food Explorer</p>
      </Polygon>
      <Text>
        <span>Meus Favoritos</span>
      </Text>
      <Search>
        <Input placeholder="Busque pelas opcões de prato" icon={FiSearch}/>
      </Search>
      <Button title=" Meu Pedido (0)"/>
      <Logout/>
    </Container>
  );
}
