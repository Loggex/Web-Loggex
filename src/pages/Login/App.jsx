import '../../assets/App.css';
import logo from '../../assets/logo.svg'
import password from '../../assets/password.svg'
import emailImg from '../../assets/emailImg.svg'
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { parseJwt, usuarioAutenticado } from '../../Services/auth';




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


        })
            .then(resposta => {
                if (resposta.status === 200) {

                  localStorage.setItem('usuario-login', resposta.data.token);
                  // e define que a requisição terminou
                  setIsLoading(false);

                  // define a variável base64 que vai receber o payload do token
                 let base64 = localStorage.getItem('usuario-login').split('.')[1];
                  // exibe no console do navegador o valor em base64
               //   console.log(base64);

                  // exibe no console o valor decodificado de base64 para string
                  // console.log(window.atob(base64));

                  // exibe no console do navegador o valor da chave role

                  console.log( parseJwt().role );

                  history.push("/Veiculos");
                  
                  console.log('Usuário logado!');
             
                //   if (parseJwt().role === '1' ) {
                //     // this.props.history.push('/tiposeventos');
                //     console.log('estou logado: ')
                // }

                // else{
                //     // this.props.history.push('/meusEventos');
                //     console.log("else");
                //   }

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
