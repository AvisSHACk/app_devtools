import { useState } from "react";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import {db, auth, doc, setDoc, createUserWithEmailAndPassword} from "./../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
import Mensaje from "../elements/Mensaje";
const Registro = () => {
    const [nombre, cambiarNombres] = useState("");
    const [apellidos, cambiarApellidos] = useState("");
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
            const usuarioInfo = await createUserWithEmailAndPassword(auth, correo, password);

            setDoc(doc(db, `usuarios/${usuarioInfo.user.uid}`), {
                nombre: nombre,
                apellidos: apellidos,
                correo: correo
            }).then(() => {
                history("/");
            })

            
        } catch (error) {
            console.log(error.code)
            let mensaje;
            switch (error.code) {
                case 'auth/wrong-password':
                    mensaje = "La contraseña es incorrecta, intentalo denuevo";
                    break;
                case 'auth/user-not-found':
                    mensaje = "El usuario no existe";
                    break;
                case 'auth/email-already-in-use':
                    mensaje = "El email ya esta en uso";
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
                name="nombre" 
                id="nombre"
                value={nombre}
                onChange={(e) => cambiarNombres(e.target.value)}
                placeholder="Ingresa tu nombre"
                autenticacion
            />

            <Texto 
                type="text" 
                name="apellidos" 
                id="apellidos"
                value={apellidos}
                onChange={(e) => cambiarApellidos(e.target.value)}
                placeholder="Ingresa tus apellidos"
                autenticacion
            />
            <Texto 
                type="email" 
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
            { mensaje && <Mensaje>{mensaje}</Mensaje>}
        </Formulario>
        </div>
     );
}
 
export default Registro;