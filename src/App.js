import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './rutas/Inicio';
import './App.css';
import Login from './rutas/Login';
import Registro from './rutas/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Inicio />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/registro"} element={<Registro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
