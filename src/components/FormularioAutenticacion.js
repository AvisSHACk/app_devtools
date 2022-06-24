import { useState } from "react";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";

const FormularioAutenticacion = () => {
    const [correo, cambiarCorreo] = useState("");
    const [password, cambiarPassword] = useState("");
    return ( 
        <Formulario autenticacion>
            <Texto 
                type="text" 
                name="correo" 
                id="correo"
                value={correo}
                onChange={(e) => cambiarCorreo(e.target.value)}
                placeholder="Ingresa tu correo"
                autenticacion
            />

            <Texto 
                type="text" 
                name="correo" 
                id="correo"
                value={password}
                onChange={(e) => cambiarPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                autenticacion
            />
            <Button autenticacion>Ingresar</Button>
        </Formulario>
     );
}
 
export default FormularioAutenticacion;