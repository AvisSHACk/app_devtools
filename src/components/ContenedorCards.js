import ContenedorCardsElement from "../elements/ContenedorCardsElement";
import Card from "./Card";

const ContenedorCards = ({tools}) => {
    return ( 
        <ContenedorCardsElement>
            {tools.map((tool) => {
                return <Card key={tool.id} titulo={tool.titulo} descripcion={tool.descripcion} enlace={tool.enlace} imagen={tool.imagen}/>;
            })}
            
        </ContenedorCardsElement>
     );
}
 
export default ContenedorCards;