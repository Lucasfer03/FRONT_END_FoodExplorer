import { Container } from "./styles";
import List from "../../svgs/svglist";

export function Button({title, loading = false, ...rest}){
    return( 
    <Container
    type="button"
    disabled={loading}
    {...rest}
    >
    <List/>
        {loading ? 'Carregando...' : title}
    </Container>
    );
}