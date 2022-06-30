import Header from "../components/Header";
// import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import {db, auth, collection,query,where, signOut, onSnapshot} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { useEffect, useState } from "react";
import Button from "../elements/botones";
import Acciones from "../elements/AccionesElement";
const MisTools = () => {
    const [tools, cambiarTools] = useState([]);
    const {usuario} = useAuth();
    useEffect(() => {
        const getToolsByUser = async () => {
            const q = query(collection(db, 'tools'), where("uidUsuario", "==", usuario.uid));
            const onSuscribe = onSnapshot(q, (snapshot) => {
                cambiarTools(snapshot.docs.map(tool => tool.data()))
            })

            return onSuscribe;
            // const result = await getDocs(q);
            // let misTools = [];
            // result.forEach((tool) => {
            //     misTools.push(tool.data());
            // })
            // cambiarTools(misTools)
        }

        
        getToolsByUser();
        
        
    }, [usuario.uid])
    return ( 
        <div className="l-container">
            <Header/>
            {usuario && <Acciones>
                            <Button to={"/agregarHerramienta"} acciones="true">Agregar herramieta</Button>
                            <Button to={"/misTools"} acciones="true">Mis tools</Button>
                            <button onClick={() => signOut(auth)}>Cerrar sesion</button>
                        </Acciones>
            }
            <ContenedorCards tools={tools}/>
        </div>
     );
}
 
export default MisTools;