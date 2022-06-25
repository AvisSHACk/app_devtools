import { useState } from "react";
import {Formulario, Texto, Button} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import {auth, createUserWithEmailAndPassword} from "./../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
const Registro = () => {
    const [correo, cambiarCorreo] = useState("");
    const [password, cambiarPassword] = useState("");
    const history = useNavigate();


    const onHandle = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, correo, password);
            history("/");
        } catch (error) {
            console.log(error.message);
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
        </Formulario>
        </div>
     );
}
 
export default Registro;