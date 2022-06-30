import Header from "../components/Header";
import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import {auth, signOut} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { useEffect, useState } from "react";
import Button from "../elements/botones";
import Acciones from "../elements/AccionesElement";
import {db, doc, getDoc} from "./../firebase/firebaseConfig"
const Inicio = () => {
    const [tools, cambiarTools] = useState([]);
    const [infoUsuario, cambiarInfoUsuario] = useState();
    const {usuario} = useAuth();
    const [cargando, cambiarCargando] = useState(true);

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
            {usuario &&
                        <Acciones>
                            <Button to={"/agregarHerramienta"} acciones="true">Agregar herramieta</Button>
                            <Button to={"/misTools"} acciones="true">Mis tools</Button>
                            <button onClick={cerrarSesion}>Cerrar sesion</button>
                        </Acciones>
            }
            <FormularioFiltros cambiarTools={cambiarTools} cambiarCargando={cambiarCargando}/>
            <ContenedorCards tools={tools} cargando={cargando}/>
        </div>
     );
}
 
export default Inicio;