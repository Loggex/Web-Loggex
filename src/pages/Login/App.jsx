import "../../assets/App.css";
import logo from "../../assets/logo.svg";
import password from "../../assets/password.svg";
import email from "../../assets/email.svg";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function App() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [senha, setSenha] = useState();

  const onsubmit = (e) => {
    history.push("/Motorista");
  };

  /* efetuaLogin = (event) => {
    event.preventDefault();

    useState({ errormensage: "", isLoading: true });

    axios.post("http://192.168.3.169:5000/api", {
      username: this.state.email,
      senha: this.state.senha,
    }); */

  return (
    <div className="App">
      <div className="background">
        <div className="cardLogin">
          <img src={logo} alt="Logo do loggex" className="logoLogin" />
          <h1>Acesse sua conta</h1>
          <form className="formLogin">
            <div className="campoLogin">
              <img src={email} alt="Ilustração de email"></img>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="inputLogin"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="campoLogin">
              <img src={password} alt="Ilustração de senha"></img>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="inputLogin"
                type="password"
                placeholder="Senha"
              ></input>
            </div>
            <div className="esqueceste">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <a href="/veiculos">
              <button onClick={onsubmit} className="botao">
                Entrar
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
