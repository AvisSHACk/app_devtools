import React, { useContext, useEffect, useState } from "react";

import {auth, db,  getDoc, doc, onAuthStateChanged} from "../firebase/firebaseConfig";

const AuthContext = React.createContext();

const useAuth = () => {  
    return useContext(AuthContext)
};

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState();
    const [rol, cambiarRol] = useState();
    const [cargando, cambiarCargando] = useState(true);
    useEffect(() => {

        const getRolUser = async (usuario) => {
            const user = await getDoc(doc(db, `usuarios/${usuario.uid}`));
            cambiarRol(user.data().rol);
        }
        
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
            cambiarUsuario(usuario);
            cambiarCargando(false);
            if(usuario) {
                getRolUser(usuario);
            }
        })

        return cancelarSuscripcion;
    }, [rol, usuario])
    
    return (
        <AuthContext.Provider value={{usuario: usuario, rol:rol}}>
            {!cargando && children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider, AuthContext}