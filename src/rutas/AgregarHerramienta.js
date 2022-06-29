import { useState } from "react";
import {Button, Formulario, Texto} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import { db, addDoc, collection, storage, ref, uploadBytes } from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";

const AgregarHerramienta = () => {
    const [titulo, cambiarTitulo] = useState("");
    const [descripcion, cambiarDescripcion] = useState("");
    const [enlace, cambiarEnlace] = useState("");
    const [imagen, cambiarImagen] = useState("");
    const [mensaje, cambiarMensaje] = useState("");
    const history = useNavigate();
    

    const agregarHerramienta = (e) => {
        e.preventDefault();

        if(titulo === "" || descripcion === "" || enlace === "" || imagen === ""){
            console.log("Hola")
            cambiarMensaje("Los campos no pueden estar vacios");
            return;
        }

        const file = imagen;
        const fileReader = new FileReader();

        if(file && fileReader && file.length > 0) {
            fileReader.readAsArrayBuffer(file[0]);
            fileReader.onload = async () => {
                const imageData = fileReader.result;

                const imagenRef = ref(storage, `tools/${imagen[0].name}`);

                const res = await uploadBytes(imagenRef, imageData);

                if(res){
                    addDoc(collection(db, 'tools'), {
                        titulo: titulo,
                        descripcion: descripcion,
                        enlace: enlace,
                        imagen: res.metadata.fullPath
                    }).then(() => {
                        history("/");
                    })
                }
            }
        }
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

                <Texto 
                    type="file" 
                    name="imagen"
                    id="imagen"
                    onChange={(e) => cambiarImagen(e.target.files)}
                    placeholder="Enlace"
                    autenticacion
                />

                <Button autenticacion>Agregar Herramienta</Button>
                <div>{mensaje}</div>
            </Formulario>
        </div>
     );
}
 
export default AgregarHerramienta;