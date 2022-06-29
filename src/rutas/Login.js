import { useState } from "react";
import {signInWithEmailAndPassword, auth} from "./../firebase/firebaseConfig";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import {useNavigate} from "react-router-dom";
import Mensaje from "../elements/Mensaje";
const Login = () => {
    const [correo, cambiarCorreo] = useState("");
    const [password, cambiarPassword] = useState("");
    const [mensaje, cambiarMensaje] = useState("");
    const history = useNavigate();

    const onHandle = async (e) => {
        e.preventDefault();

        if(correo === "" || password === ""){
            cambiarMensaje("Los campos no pueden estar vacios");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            history("/");
        } catch (error) {
            let mensaje;
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = "La contraseña es incorrecta, intentalo denuevo";
                    break;
                case 'auth/user-not-found':
                    mensaje = "El usuario no existe";
                    break;
            
                default:
                    mensaje = "Hubo un error al intentar conectarse con el servidor";
                    break;
            }

            cambiarMensaje(mensaje);
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
            <Mensaje>{mensaje}</Mensaje>
        </Formulario>
        </div>
     );
}
 
export default Login;