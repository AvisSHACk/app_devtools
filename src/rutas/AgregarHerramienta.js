import { useState } from "react";
import {Button, Formulario, Texto} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import { db, addDoc, collection } from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
const AgregarHerramienta = () => {
    const [titulo, cambiarTitulo] = useState("");
    const [descripcion, cambiarDescripcion] = useState("");
    const [enlace, cambiarEnlace] = useState("");
    const history = useNavigate();
    

    const agregarHerramienta = (e) => {
        e.preventDefault();

        addDoc(collection(db, 'herramientas'), {
            titulo: titulo,
            descripcion: descripcion,
            enlace: enlace
        }).then(() => {
            history("/");
        })


    }

    return (

        <div>
            <LogoElement>Agrega una herramienta</LogoElement>
            <Formulario action="" autenticacion onSubmit={agregarHerramienta}>
                <Texto 
                    type="text" 
                    name="titulo" 
                    id="titulo"
                    value={titulo}
                    onChange={(e) => cambiarTitulo(e.target.value)}
                    placeholder="Titulo"
                    autenticacion
                />

                <Texto 
                    type="text" 
                    name="descripcion" 
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => cambiarDescripcion(e.target.value)}
                    placeholder="Descripcion"
                    autenticacion
                />

                <Texto 
                    type="text" 
                    name="enlace" 
                    id="enlace"
                    value={enlace}
                    onChange={(e) => cambiarEnlace(e.target.value)}
                    placeholder="Enlace"
                    autenticacion
                />

                <Button autenticacion>Agregar Herramienta</Button>
            </Formulario>
        </div>
     );
}
 
export default AgregarHerramienta;