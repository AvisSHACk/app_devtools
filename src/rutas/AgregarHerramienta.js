import { useState } from "react";
import {Button, Formulario, Texto} from "../elements/FormulariosElements";
import LogoElement from "../elements/LogoElement";
import { db, addDoc, collection, storage, ref, uploadBytes } from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../contextos/authContext";

const AgregarHerramienta = () => {
    const [titulo, cambiarTitulo] = useState("");
    const [descripcion, cambiarDescripcion] = useState("");
    const [enlace, cambiarEnlace] = useState("");
    const [imagen, cambiarImagen] = useState("");
    const [mensaje, cambiarMensaje] = useState("");
    const [cargando, cambiarCargando] = useState(false);
    const history = useNavigate();
    const {usuario} = useAuth();
    

    const agregarHerramienta = (e) => {
        e.preventDefault();

        if(titulo === "" || descripcion === "" || enlace === "" || imagen === ""){
            console.log("Hola")
            cambiarMensaje("Los campos no pueden estar vacios");
            return;
        }
        
        cambiarCargando(true);
        const file = imagen;

        const fileReader = new FileReader();
        
        if(file && fileReader && file.length > 0) {
            if(!file[0].type === 'image/jpeg' || !file[0].type === 'image/png') {
                cambiarMensaje("Recuerda subir unicamente una imagen");
                cambiarCargando(false);
                return;

            }

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
                        imagen: res.metadata.fullPath,
                        uidUsuario: usuario.uid
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

                {!cargando ? <Button autenticacion>Agregar Herramienta</Button> : <p>Publicando herramienta</p>}
                <div>{mensaje}</div>
            </Formulario>
        </div>
     );
}
 
export default AgregarHerramienta;