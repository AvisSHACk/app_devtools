import Header from "../components/Header";
import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import {auth, signOut} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { useState } from "react";
import Button from "../elements/botones";
import Acciones from "../elements/AccionesElement";
const Inicio = () => {
    const [tools, cambiarTools] = useState([]);
    const {usuario} = useAuth();
    
    return (
        <div className="l-container">
            <Header/>
            {usuario && <Acciones>
                            <Button to={"/agregarHerramienta"} acciones="true">Agregar herramieta</Button>
                            <button onClick={() => signOut(auth)}>Cerrar sesion</button>
                        </Acciones>
            }
            <FormularioFiltros cambiarTools={cambiarTools}/>
            <ContenedorCards tools={tools}/>
        </div>
     );
}
 
export default Inicio;