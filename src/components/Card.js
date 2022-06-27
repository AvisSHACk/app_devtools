import ContenedorCard from "../elements/CardElement";

const Card = ({id, titulo, descripcion, enlace}) => {
    return ( 
        <ContenedorCard>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </ContenedorCard>
     );
}
 
export default Card;