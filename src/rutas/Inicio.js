import Header from "../components/Header";
import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import {auth, signOut} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { useState } from "react";
import Button from "../elements/botones";
const Inicio = () => {
    const [tools, cambiarTools] = useState([]);
    const {usuario} = useAuth();
    
    return (
        <div className="l-container">
            <Header/>
            {usuario && <>
                            <Button to={"/agregarHerramienta"}>Agregar herramieta</Button>
                            <button onClick={() => signOut(auth)}>Cerrar sesion</button>
                        </>
            }
            <FormularioFiltros cambiarTools={cambiarTools}/>
            <ContenedorCards tools={tools}/>
        </div>
     );
}
 
export default Inicio;