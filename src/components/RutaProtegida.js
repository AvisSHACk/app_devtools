import { useAuth } from "../contextos/authContext";

import {Navigate, Outlet} from "react-router-dom";

const RutaProtegida = () => {
    const {usuario} = useAuth();

    if(usuario) {
        return <Outlet/>
    } else {
        return <Navigate to="/login"/>
    }
}

export default RutaProtegida;