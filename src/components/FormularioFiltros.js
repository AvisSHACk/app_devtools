import { useEffect, useState } from "react";
import {Formulario, Texto} from "../elements/FormulariosElements";
import useGetTools from "../hooks/useGetTools";
const FormularioFiltros = ({cambiarTools}) => {
    const [buscar, cambiarBuscar] = useState("");
    const tools = useGetTools();

    useEffect(() => {
        cambiarTools(tools);
    }, [cambiarTools, tools])
    return (
        <Formulario action="">
            <Texto 
                type="text" 
                name="buscar"
                id="buscar"
                value={buscar}
                onChange={(e) => cambiarBuscar(e.target.value)}
                placeholder="Haz tu busquedad..."
            />

            <button>Buscar</button>
        </Formulario>
     );
}
 
export default FormularioFiltros;