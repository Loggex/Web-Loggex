import "../../assets/App.css";
import logo from "../../assets/logo.svg";
import password from "../../assets/password.svg";
import emailImage from "../../assets/email.svg";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { parseJwt } from "../../Services/auth";
import api from "../../Services/api";

export default function App() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [erroMensagem, setErroMensagem] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  
  return (
    <div className="App">
      <div className="background">
        <div className="cardLogin">
          <img src={logo} alt="Logo do loggex" className="logoLogin" />
          <h1>Acesse sua conta</h1>
          <form className="formLogin">
            <div className="campoLoginE">
              <img src={emailImage} alt="Ilustração de email"></img>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                  <HiEye className="eye" onClick={handleClick} />
                ) : (
                  <HiEyeOff className="eye" onClick={handleClick} />
                )}
              </div>
            </div>
            <div className="esqueceste">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <div className="loginBtn">
              <span className="red">
                {erroMensagem === "" ? "" : "Email ou senha inválidos"}
              </span>
              {isLoading === true && (
                <button
                  type="submit"
                  disabled
                  className="botao"
                >
                  Carregando...
                </button>
              )}
              {isLoading === false && (
                <button
                  disabled={email === "" || senha === "" ? "none" : ""}
                  type="submit"
                  className="botao"
                >
                  Entrar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
