import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import { useState } from "react";
const Inicio = () => {
    const [tools, cambiarTools] = useState([]);
    return ( 
        <>
            <FormularioFiltros cambiarTools={cambiarTools}/>
            <ContenedorCards tools={tools}/>
        </>
     );
}
 
export default Inicio;