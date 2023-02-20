import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Menu from "./modules/menu";
import "./styles.css";
import Inicio from "./modules/inicio";
import Teste from "./modules/teste";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <Routes>
          <Route path="/home" element={<Inicio />} />
          <Route path="/teste" element={<Teste />} />

          {/* Redireciona para a rota padrão do aplicativo */}
          <Route path="" element={<Navigate to="/home" />} />

          {/* Redireciona para uma página de erro para rotas não encontradas */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
