import "../../assets/App.css";
import logo from "../../assets/logo.svg";
import password from "../../assets/password.svg";
import email from "../../assets/email.svg";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function App() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const onsubmit = (e) => {
    history.push("/Motorista");
  };

  return (
    <div className="App">
      <div className="background">
        <div className="cardLogin">
          <img src={logo} alt="Logo do loggex" className="logoLogin" />
          <h1>Acesse sua conta</h1>
          <form className="formLogin">
            <div className="campoLoginE">
              <img src={email} alt="Ilustração de email"></img>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="inputLogin"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="campoLoginP">
              <img src={password} alt="Ilustração de senha"></img>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="inputLogin"
                type={show ? "text" : "password"}
                placeholder="Senha"
              />
              <div className="login-eye">
                {show ? (
                  <HiEye Size={20} onClick={handleClick} />
                ) : (
                  <HiEyeOff Size={20} onClick={handleClick} />
                )}
              </div>
            </div>
            <div className="esqueceste">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <div className="loginBtn">
              <a href="/veiculos">
                <button onClick={onsubmit} className="botao">
                  Entrar
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
