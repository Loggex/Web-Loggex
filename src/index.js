import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Login/App";
import Veiculos from "./pages/Veiculos/Veiculos";
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

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/veiculos" component={Veiculos} />
        <Route path="/veiculo" component={Veiculo} />
        <Route path="/Motorista" component={Motorista} />
        <Route path="/Rota" component={Rota} />
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
