import ContenedorCards from "../components/ContenedorCards";
import {db, collection,query,where, onSnapshot} from "./../firebase/firebaseConfig"
import { useAuth } from "../contextos/authContext";
import { useEffect, useState } from "react";
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
           <ContenedorCards tools={tools}/>
        </div>
     );
}
 
export default MisTools;