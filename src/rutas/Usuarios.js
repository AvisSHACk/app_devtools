import { updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../contextos/authContext";
import LogoElement from "../elements/LogoElement";
import { db, collection, onSnapshot, doc } from "../firebase/firebaseConfig";

const Usuarios = () => {
    const {usuario} = useAuth();
    const [usuarios, cambiarUsuarios] = useState([]);
    useEffect(() => {
        const onSuscribe = onSnapshot(collection(db, 'usuarios'), (snapshot) => {
            cambiarUsuarios(snapshot.docs.map((usuario) => {
                return {...usuario.data()} 
            }))
        })

        return onSuscribe;
    }, [usuario])
    const changeRol = async (e) => {
        const usuarioRef = doc(db, `usuarios/${usuario.uid}`);
        await updateDoc(usuarioRef, {
            rol: e.target.value
        })
    }
    return (
        <>
            <LogoElement>Administrar usuarios</LogoElement>
            <div className="l-container">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Roles</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => {
                            return (
                            <tr>
                                <td>
                                    {usuario.nombre}
                                </td>

                                <td>
                                    {usuario.apellidos}
                                </td>
                                <td>
                                 {usuario.correo}
                                </td>
                                <td>
                                    <select name="roles" id="roles" value={usuario.rol} onChange={(e) => changeRol(e    )}>
                                        <option value="admin">admin</option>
                                        <option value="moderador">moderador</option>
                                        <option value="normal">normal</option>
                                    </select>
                                    
                                </td>
                                <td>
                                    {/* {usuario.} */}
                                </td>
                            </tr>
                            )})}
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default Usuarios;