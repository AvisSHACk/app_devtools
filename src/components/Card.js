import { useEffect, useState } from "react";
import ContenedorCard from "../elements/CardElement";
import { storage, ref, getDownloadURL } from "../firebase/firebaseConfig";

const Card = ({tool}) => {

    const [imagenURL, cambiarImagenURL] = useState("");
    useEffect(() => {  

        const toolImageDonwload = async () => {
            const toolImageRef = ref(storage, tool.imagen);
            const urlToolImagen = await getDownloadURL(toolImageRef);
            cambiarImagenURL(urlToolImagen);
        }

        toolImageDonwload();

    }, [tool.imagen])

    return ( 
        <ContenedorCard>
            {/* {console.log(imagen)} */}
            <img src={imagenURL} alt="" />
            <h3>{tool.titulo}</h3>
            <p>{tool.descripcion}</p>
            <p>Enlace <a href={tool.enlace}>Ir al enlace</a></p>
        </ContenedorCard>
     );
}
 
export default Card;