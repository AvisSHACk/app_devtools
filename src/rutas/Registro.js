import { useState } from "react";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import {auth, createUserWithEmailAndPassword} from "./../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
import Mensaje from "../elements/Mensaje";
const Registro = () => {
    const [correo, cambiarCorreo] = useState("");
    const [password, cambiarPassword] = useState("");
    const [mensaje, cambiarMensaje] = useState("");
    const history = useNavigate();


    const onHandle = async (e) => {
        e.preventDefault();

        if(correo === "" || password === ""){
            console.log("Hola")
            cambiarMensaje("Los campos no pueden estar vacios");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, correo, password);
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
            <LogoElement>Registrate a Dev tools</LogoElement>

            <Formulario autenticacion action ="" onSubmit={onHandle}>
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
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={(e) => cambiarPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                autenticacion
            />
            <Button autenticacion type="submit">Ingresar</Button>
            <Mensaje>{mensaje}</Mensaje>
        </Formulario>
        </div>
     );
}
 
export default Registro;