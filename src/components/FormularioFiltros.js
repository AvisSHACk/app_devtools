import { useEffect, useState } from "react";
import {Button, Formulario, Texto} from "../elements/FormulariosElements";
import useGetTools from "../hooks/useGetTools";
const FormularioFiltros = ({cambiarTools, cambiarCargando}) => {
    const [buscar, cambiarBuscar] = useState("");
    const tools = useGetTools();
    

    useEffect(() => {
        if(tools.length > 0){
            cambiarTools(tools);
            cambiarCargando(false)
        }
    }, [cambiarTools, tools, cambiarCargando])

    const handleSubmit = (e) => {
        e.preventDefault();
        cambiarTools(tools.filter((tool) => {
            return tool.titulo.toLowerCase().includes(buscar.toLowerCase()) && {...tool} // si se comprueba una cadena vacia devuelve true =) https://ajaxhispano.com/ask/por-que-se-devuelve-true-cuando-se-comprueba-si-una-cadena-vacia-esta-en-otra-84485/
        }))
    }
    return (
        <Formulario action="" onSubmit={handleSubmit} search>
            <Texto 
                type="search" 
                name="buscar"
                id="buscar"
                value={buscar}
                onChange={(e) => cambiarBuscar(e.target.value)}
                placeholder="Haz tu busquedad..."
            />

            <Button search>Buscar</Button>
        </Formulario>
     );
}
 
export default FormularioFiltros;