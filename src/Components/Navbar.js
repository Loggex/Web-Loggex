import React from 'react';
import '../assets/App.css';
import logo from '../assets/logobranco.svg'
import home from '../assets/home.svg'
import manutencao from '../assets/manutencao.svg'
import volante from '../assets/steering.svg'
import rota from '../assets/rota.svg'
import truck from '../assets/truck.svg'
import logout from '../assets/logout.svg'
import {Link} from 'react-router-dom'


export default function Navbar(){
    return(
        <div id="FundoNavbar">
            <div className='cardNav'>
            <img src={logo} id='logoGeral' alt='logo branco'></img>
            <img alt = 'foto do perfil'src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' className='imgPerfil'></img>
            </div>
            <section className='sectionNav'>
                <h4>Nome do Usuário</h4>
                <span className='subtitulonav'>Gestor de frotas</span>
                <div className='botoes'>
                <Link to="/" className='navButton'><img src={home} alt='icone de home'/><span>Home</span></Link>
                <Link to="/motoristas" className='navButton'><img src={volante} alt='icone de motoristas'/><span>Motoristas</span></Link>
                <Link to="/veiculos" className='navButton'><img src={truck} alt='icone de veiculos'/><span>Veiculos</span></Link>
                <Link to="/rotas" className='navButton'><img src={rota} alt='icone de rotas'/><span>Rotas</span></Link>
                <Link to="/manutencoes" className='navButton'><img src={manutencao}alt='icone de manutenções'/><span>Manutenções</span></Link>
                </div>
                <button className='botaoSair'><span>Sair</span><img src={logout}alt='icone de sair'></img></button>
            </section>
        </div>
    )
}