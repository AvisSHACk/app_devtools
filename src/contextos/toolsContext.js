import React, { useContext, useEffect, useState } from "react";

import {auth, db,  getDoc, doc, onAuthStateChanged} from "../firebase/firebaseConfig";
import useGetTools from "../hooks/useGetTools";

const ToolsContext = React.createContext();

const useTools = () => {  
    return useContext(ToolsContext)
};

const ToolsProvider = ({children}) => {
    const tools = useGetTools();
    const [cargando, cambiarCargando] = useState(true);
    
    useEffect(() => {
        if(tools.length > 0){
            cambiarCargando(false)
        }
    }, [tools, cambiarCargando])
    
    return (
        <ToolsContext.Provider value={{tools: tools}}>
            {!cargando && children}
        </ToolsContext.Provider>
    )
}

export {useTools, ToolsProvider, ToolsContext}