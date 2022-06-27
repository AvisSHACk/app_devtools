import { useState } from "react";
import {signInWithEmailAndPassword, auth} from "./../firebase/firebaseConfig";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import {useNavigate} from "react-router-dom";
const Login = () => {
    const [correo, cambiarCorreo] = useState("");
    const [password, cambiarPassword] = useState("");
    const history = useNavigate();

    const onHandle = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            history("/");
        } catch (error) {
            console.log(error.message);
        }

    }
    return ( 
        <div>
            <LogoElement>Inicia sesion en Dev tools</LogoElement>

            <Formulario autenticacion onSubmit={onHandle}>
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