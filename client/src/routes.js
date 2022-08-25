import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Compras from "./pages/Compras";
import Produtos from "./pages/Produtos";

import Header from './components/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
       
        <Route path="/compras/:id" element={ <Compras/> } />
        <Route path="/produtos/:id" element={ <Produtos/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;