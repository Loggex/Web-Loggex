import '../../assets/App.css';
import logo from '../../assets/logo.svg'
import password from '../../assets/password.svg'
import emailImg from '../../assets/emailImg.svg'
import React, {useState} from 'react';
import axios from 'axios';
import api from "../../services/api";
import { parseJwt } from "../../services/auth";
import { useHistory } from "react-router-dom";



export default function Login() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
    const [erroMensagem, setErroMensagem] = useState('');

    let history = useHistory();

    function efetuarLogin(event) {

        event.preventDefault();

        setErroMensagem('')
        setIsLoading(true)

        api.post('/Login', {
            email: email,
            senha: senha
        })

            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('usuario-login', response.data.token)

                    setSenha('')

                    setEmail('')

                    setIsLoading(false)

                    if (parseJwt().role === "1") {
                        history.push('/Veiculos')
                    }
                    if (parseJwt().role === "2") {
                        history.push('/Veiculos')
                    }
                    
                }
            })
            .catch(erro => {
                console.log(erro)

                // setSenha('')

                setErroMensagem("E-mail e/ou Senha inválidos")

                setIsLoading(false)
            })
    }

  return (
    <div className="App">
      <div className="background">
        <div className="cardLogin">
          <img src={logo} alt="Logo do loggex"className="logoLogin"/>
          <h1>Acesse sua conta</h1>
          <form className="formLogin" onSubmit={efetuarLogin}>
            <div className="campoLogin">
              <img src={emailImg} alt='Ilustração de email'></img>
              <input className="inputLogin" type="email"placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)}></input>
              
            </div>
            <div className="campoLogin">
              <img src={password} alt='Ilustração de senha'></img>
              <input  className="inputLogin" type="password"placeholder="Senha" value={senha} onChange={(s) => setSenha(s.target.value)}></input>
            </div>
            <div className="esqueceste">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <button disabled={
                                        email === '' || senha === ''
                                            ? 'none'
                                            : ''
                                    } type="submit" className='botao'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
