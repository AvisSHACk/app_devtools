import { useState } from "react";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
const Login = () => {
    const [correo, cambiarCorreo] = useState("");
    const [password, cambiarPassword] = useState("");
    return ( 
        <div>
            <LogoElement>Inicia sesion en Dev tools</LogoElement>

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
        </div>
     );
}
 
export default Login;