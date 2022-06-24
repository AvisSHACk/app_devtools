import { useState } from "react";
import {Formulario, Texto} from "../elements/FormulariosElements";
const FormularioFiltros = () => {
    const [buscar, cambiarBuscar] = useState("");
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