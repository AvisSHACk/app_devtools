import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './rutas/layout';
import './App.css';
import Login from './rutas/Login';
import Registro from './rutas/Registro';
import {RutaProtegidaLogin, RutaProtegidaAdmins} from './components/RutaProtegida';
import { AuthProvider } from './contextos/authContext';
import AgregarHerramienta from './rutas/AgregarHerramienta';
import MisTools from './rutas/MisTools';
import Usuarios from './rutas/Usuarios';
import { ToolsProvider } from './contextos/toolsContext';
import Inicio from './rutas/Inicio';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToolsProvider>
          <Routes>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/registro"} element={<Registro />}/>

            <Route path={"/"} element={<Layout />}>
              <Route path={"inicio"} element={<Inicio />} />
              <Route element={<RutaProtegidaLogin/>}>
                <Route element={<RutaProtegidaAdmins/>}>
                  <Route path={"usuarios"} element={<Usuarios />}/>
                </Route>

                <Route path={"agregarHerramienta"} element={<AgregarHerramienta />}/>
                <Route path={"misTools"} element={<MisTools />}/>
              </Route>
            </Route>
            
          </Routes>
        </ToolsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
