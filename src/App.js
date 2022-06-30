import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './rutas/Inicio';
import './App.css';
import Login from './rutas/Login';
import Registro from './rutas/Registro';
import RutaProtegida from './components/RutaProtegida';
import { AuthProvider } from './contextos/authContext';
import AgregarHerramienta from './rutas/AgregarHerramienta';
import MisTools from './rutas/MisTools';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={"/login"} element={<Login />}/>
          <Route path={"/registro"} element={<Registro />}/>
          <Route path={"/"} element={<Inicio />}/>
          <Route element={<RutaProtegida/>}>
            <Route path={"/agregarHerramienta"} element={<AgregarHerramienta />}/>
            <Route path={"/misTools"} element={<MisTools />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
