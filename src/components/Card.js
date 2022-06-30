import { useEffect, useState } from "react";
import ContenedorCard from "../elements/CardElement";
import { storage, ref, getDownloadURL } from "../firebase/firebaseConfig";

const Card = ({id, titulo, descripcion, enlace, imagen}) => {

    const [imagenURL, cambiarImagenURL] = useState("");
    useEffect(() => {  

        const toolImageDonwload = async () => {
            const toolImageRef = ref(storage, imagen);
            const urlToolImagen = await getDownloadURL(toolImageRef);
            cambiarImagenURL(urlToolImagen);
        }

        toolImageDonwload();

    }, [imagen])

    return ( 
        <ContenedorCard>
            {/* {console.log(imagen)} */}
            <img src={imagenURL} alt="" />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p>Enlace <a href={enlace}>Ir al enlace</a></p>
        </ContenedorCard>
     );
}
 
export default Card;