import Header from "../components/Header";
import {auth, signOut} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { useEffect, useState } from "react";
import Button from "../elements/botones";
import Acciones from "../elements/AccionesElement";
import {db, doc, getDoc} from "./../firebase/firebaseConfig";
import { Outlet } from "react-router-dom";
const Layout = () => {
    const [infoUsuario, cambiarInfoUsuario] = useState();
    const {usuario} = useAuth();
    // const [cargando, cambiarCargando] = useState(true);

    useEffect(() => {
        const getUserInfo = async () => {
            const user = await getDoc(doc(db, `usuarios/${usuario.uid}`));
            cambiarInfoUsuario(user.data());
        }

        if(usuario){
            getUserInfo();
        }
    }, [usuario])

    const cerrarSesion = () => {
        signOut(auth);
        cambiarInfoUsuario("");
    }
    
    return (
        <div className="l-container">
            <Header/>
            {infoUsuario && <p>Hola {infoUsuario.nombre} {infoUsuario.apellidos}, ¿Qué haremos hoy?</p>}
            
            <Acciones>
            {usuario ?
                <>
                    <Button to={"/agregarHerramienta"} acciones="true">Agregar herramieta</Button>
                    <Button to={"/misTools"} acciones="true">Mis tools</Button>
                    <Button to={"/usuarios"} acciones="true">Ver todos los usuarios</Button>
                    <button onClick={cerrarSesion}>Cerrar sesion</button>
                </>
                :
                <>
                    <Button to={"/login"} acciones="true">Iniciar sesion</Button>
                    <Button to={"/registro"} acciones="true">Registrate</Button>
                </>
    
            }
            </Acciones>
            <Outlet />
        </div>
     );
}
 
export default Layout;