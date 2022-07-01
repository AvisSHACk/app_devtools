import { useAuth } from "../contextos/authContext";

import {Navigate, Outlet} from "react-router-dom";

const RutaProtegidaLogin = () => {
    const {usuario} = useAuth();

    if(usuario) {
        return <Outlet/>
    } else {
        return <Navigate to="/login"/>
    }
}

const RutaProtegidaAdmins = () => {
    const {rol} = useAuth();
    if(rol === 'admin') {
        return <Outlet/>
    } else {
        return <Navigate to="inicio"/>
    }
}

export { RutaProtegidaLogin, RutaProtegidaAdmins};