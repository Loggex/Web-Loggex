import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Login/App';
import Veiculos from './pages/Veiculos/Veiculos';
import Motoristas from './pages/Motoristas/Motoristas';
import Manutencoes from './pages/Manutenções/Manutencoes'
import Rotas from './pages/Rotas/Rotas'
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>

       <Route exact path="/" component={App}/>
       <Route path="/veiculos" component={Veiculos}/>
       <Route path="/motoristas" component={Motoristas}/>
       <Route path="/manutencoes" component={Manutencoes}/>
       <Route path="/rotas" component={Rotas}/>



      </Switch>
    </div>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
routing
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
