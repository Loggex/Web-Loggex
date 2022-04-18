import '../../assets/App.css';
import logo from '../../assets/logo.svg'
import password from '../../assets/password.svg'
import email from '../../assets/email.svg'



function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="cardLogin">
          <img src={logo} alt="Logo do loggex"className="logoLogin"/>
          <h1>Acesse sua conta</h1>
          <form className="formLogin">
            <div className="campoLogin">
              <img src={email} alt='Ilustração de email'></img>
              <input className="inputLogin" type="email"placeholder="Email"></input>
            </div>
            <div className="campoLogin">
              <img src={password} alt='Ilustração de senha'></img>
              <input className="inputLogin" type="password"placeholder="Senha"></input>
            </div>
            <div className="esqueceste">
              <a href="">Esqueceu sua senha?</a>
            </div>
            <a href="/veiculos">
            <button className='botao'>Entrar</button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
