import { Container, Polygon, Text} from "./styles";

export function Footer() {
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
            d="M13.0635 0.550903L25.7096 7.85208V22.4544L13.0635 29.7556L0.417527 22.4544V7.85208L13.0635 0.550903Z"
            fill="white"
            fill-opacity="0.3"
          />
        </svg>

        <p>Food Explorer</p>
      </Polygon>
      <Text>
        <p>© 2022 - Todos os direitos reservados.</p>
      </Text>
    </Container>
  );
}
