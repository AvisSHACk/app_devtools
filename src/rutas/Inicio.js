import Header from "../components/Header";
import FormularioFiltros from "../components/FormularioFiltros";
import ContenedorCards from "../components/ContenedorCards";
const Inicio = () => {
    return (
        <div className="l-container">
            <Header/>
            <FormularioFiltros/>
            <ContenedorCards />
        </div>
     );
}
 
export default Inicio;