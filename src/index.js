import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Login/App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFound from "./pages/NotFound/notFound";
import Veiculo from "./pages/veiculoUnico/veiculo";
import Motorista from "./pages/MotoristaUnico/Motorista";
import PerfilGestor from "./pages/PerfilGestor/Gestor";
import Rota from "./pages/Rotas/Rota";
import Veiculos from './pages/Veiculos/Veiculos';
import Inicio from './pages/Início/inicio'
import Motoristas from './pages/Motoristas/Motoristas';
import Rotas from './pages/Rotas/Rotas'
import Login from './pages/Login/App'
import CadastroPecas from "./pages/veiculoUnico/CadastroPecas";

const routing = (
  <Router>
    <div>
      

      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Login" component={Login} />
        <Route path="/veiculos" component={Veiculos} />
        <Route path="/veiculo" component={Veiculo} />
        <Route path="/Motoristas" component={Motoristas} />
        <Route path="/Motorista" component={Motorista} />
        <Route path="/Rota" component={Rota} />
        <Route path="/Rotas" component={Rotas} />
        <Route path="/Pecas" component={CadastroPecas} />
        <Route path="/Gestor" component={PerfilGestor} />
        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" />{" "}
        {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
      
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
