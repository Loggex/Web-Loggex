import React, {useState, useEffect} from 'react';
import '../assets/App.css';
import logo from '../assets/logobranco.svg'
import home from '../assets/home.svg'
import volante from '../assets/steering.svg'
import rota from '../assets/rota.svg'
import truck from '../assets/truck.svg'
import logout from '../assets/logout.svg'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useHistory } from 'react-router';
import { parseJwt,Logado } from '../Services/auth';



export default function Navbar(){
  const [ UsuarioLogado, setUsuario ] = useState( );
  const history = useHistory();
    
    const onMotoristas = (e) => {
        history.push("/Motoristas");
      };
    const onVeiculos = (e) => {
        history.push("/Veiculos");
      };
    const onRotas = (e) => {
        history.push("/Rotas");
      };
      const onLogin = (e) => {
        history.push("/Login");
      };

       function buscarUsuario() {

         axios('https://loggex.azurewebsites.net/api/usuarios/' + parseJwt().jti , {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                  setUsuario(resposta.data)
                }
            })

            .catch(erro => console.log(erro));
    };

    function deslogar() {
      localStorage.removeItem('usuario-login');
      onLogin()
 };

    useEffect(buscarUsuario, []);

    return(
        <div id="FundoNavbar">
            <div className='cardNav'>
            <img src={logo} id='logoGeral' alt='logo branco'></img>
            <img alt = 'foto do perfil'src={'http://localhost:5000/StaticFiles/Images/' + UsuarioLogado?.imgPerfil} className='imgPerfil'></img>
            </div>
            <section className='sectionNav'>
                <h4>{UsuarioLogado?.nome}</h4>
                <span className='subtitulonav'>Gestor de frotas</span>
                <div className='botoes'>
                <Link to="/" className='navButton'><img src={home}/><span>Home</span></Link>
                <Link to="/motoristas" onClick={onMotoristas} className='navButton'><img src={volante}/><span>Motoristas</span></Link>
                <Link to="/veiculos" onClick={onVeiculos} className='navButton'><img src={truck}/><span>Veiculos</span></Link>
                <Link to="/rotas" onClick={onRotas} className='navButton'><img src={rota}/><span>Rotas</span></Link>
                </div>
                <button className='botaoSair'onClick={deslogar}><span>Sair</span><img src={logout}alt='icone de sair'></img></button>
            </section>
        </div>
    )
}