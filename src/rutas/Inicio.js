import Header from "../components/Header";
import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import {auth, signOut} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { Link } from "react-router-dom";
import { useState } from "react";
const Inicio = () => {
    const [tools, cambiarTools] = useState([]);
    const {usuario} = useAuth();
    

    return (
        <div className="l-container">
            <Header/>
            {usuario && <Link to={"/agregarHerramienta"}>Agregar herramieta</Link>}
            <FormularioFiltros cambiarTools={cambiarTools}/>
            <ContenedorCards tools={tools}/>
            {usuario && <button onClick={() => signOut(auth)}>Cerrar sesion</button>}
        </div>
     );
}
 
export default Inicio;