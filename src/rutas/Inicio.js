import Header from "../components/Header";
import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
import {auth, signOut} from "./../firebase/firebaseConfig"
const Inicio = () => {
    return (
        <div className="l-container">
            <Header/>
            <FormularioFiltros/>
            <ContenedorCards />
            <button onClick={() => signOut(auth)}>Cerrar sesion</button>
        </div>
     );
}
 
export default Inicio;