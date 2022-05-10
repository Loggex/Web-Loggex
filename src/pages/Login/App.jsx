import '../../assets/App.css';
import logo from '../../assets/logo.svg'
import password from '../../assets/password.svg'
import emailImg from '../../assets/emailImg.svg'
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';



export default function App() {
  const [emailInput, setEmail] = useState('');
  const[senhaInput, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const logado = (e) => {
    history.push("/Veiculos")
  }

  function login(cred) {
    cred.preventDefault();

    setIsLoading(true);
        axios.post('http://localhost:5000/api/login/Gerente', {

      
            email: emailInput,
            senha: senhaInput,


        }, {
              headers: {
                //'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlbWVsb0BlbWFpbC5jb20iLCJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsIlRlbGVmb25lIjoiMTE5ODc2NTQzMjEiLCJleHAiOjE2NTIxMDM0NTcsImlzcyI6IkxvZ2dleC53ZWJBUEkiLCJhdWQiOiJMb2dnZXgud2ViQVBJIn0.s5YxTqVrgD025rlCLq4Ldhg5Fnm6jTFpyo8VYr4tvII'
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {

                  localStorage.setItem('usuario-login', resposta.data.token);
                  // e define que a requisição terminou
                  setIsLoading(false);

                  // define a variável base64 que vai receber o payload do token
                  let base64 = localStorage.getItem('usuario-login').split('.')[1];
                  // exibe no console do navegador o valor em base64
                  console.log(base64);

                  // exibe no console o valor decodificado de base64 para string
                  // console.log(window.atob(base64));

                  // exibe no console do navegador o valor da chave role
                  // console.log( JSON.parse( window.atob(base64) ) );

                  // console.log( parseJwt().role );

                  // exibe as propriedades da página

                  console.log('Usuário logado!');

                  setEmail('')
                  setSenha('')
                  history.push("/Veiculos");

                }
            })

            .catch(erro => console.log(erro), setInterval(() => {
                // setIsLoading(false)

            }, 5000));
};

  return (
    <div className="App">
      <div className="background">
        <div className="cardLogin">
          <img src={logo} alt="Logo do loggex"className="logoLogin"/>
          <h1>Acesse sua conta</h1>
          <form onSubmit={login} className="formLogin">
            <div className="campoLogin">
              <img src={emailImg} alt='Ilustração de email'></img>
              <input className="inputLogin" type="email"placeholder="Email" onChange={(campo) => setEmail(campo.target.value)}></input>
              
            </div>
            <div className="campoLogin">
              <img src={password} alt='Ilustração de senha'></img>
              <input className="inputLogin" onChange={(campo) => setSenha(campo.target.value)} type="password"placeholder="Senha"></input>
            </div>
            <div className="esqueceste">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <button className='botao'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
// console.log(email);
// export default App;
