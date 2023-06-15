import { Routes, Route } from 'react-router-dom';
import Login from '../Paginas/Login';
import Cadastro from '../Paginas/Cadastro/Cadastro';
import PaginaPrincipal from "../Paginas/PaginaPrincipal/PaginaPrincipal";
import PaginaAmigos from "../Paginas/PaginaAmigos/PaginaAmigos";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Login} />
      <Route path="/cadastro" Component={Cadastro} />
      <Route path="/principal" Component={PaginaPrincipal} />
      <Route path="/amigos" Component={PaginaAmigos} />
    </Routes>
  );
};