import { useEffect, useState } from "react";
import {Formulario, Texto} from "../elements/FormulariosElements";
import useGetTools from "../hooks/useGetTools";
const FormularioFiltros = ({cambiarTools}) => {
    const [buscar, cambiarBuscar] = useState("");
    const tools = useGetTools();

    useEffect(() => {
        cambiarTools(tools);
    }, [cambiarTools, tools])

    const handleSubmit = (e) => {
        e.preventDefault();
        cambiarTools(tools.filter((tool) => {
            return tool.titulo.toLowerCase().includes(buscar.toLowerCase()) && {...tool} // si se comprueba una cadena vacia devuelve true =) https://ajaxhispano.com/ask/por-que-se-devuelve-true-cuando-se-comprueba-si-una-cadena-vacia-esta-en-otra-84485/
        }))
    }
    return (
        <Formulario action="" onSubmit={handleSubmit}>
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