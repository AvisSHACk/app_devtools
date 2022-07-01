import ContenedorCardsElement from "../elements/ContenedorCardsElement";
import Card from "./Card";

const ContenedorCards = ({tools, cargando}) => {
    return ( 
        <ContenedorCardsElement>
            {cargando && <p>Cargando</p>}
            {tools.map((tool) => {
                return <Card key={tool.id} tool={tool}/>;
            })}

            {!cargando && tools.length === 0 && <p>Sin resultados</p>}
            
        </ContenedorCardsElement>
     );
}
 
export default ContenedorCards;