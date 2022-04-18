import React, {useState, useEffect} from 'react';
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
            <div className='card'>
            <img src={logo} id='logoGeral'></img>
            <img src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3' className='imgPerfil'></img>
            </div>
            <section className='sectionNav'>
                <h4>Nome do Usuário</h4>
                <span className='subtitulonav'>Gestor de frotas</span>
                <div className='botoes'>
                <Link className='navButton'><img src={home}/><span>Home</span></Link>
                <Link className='navButton'><img src={volante}/><span>Motoristas</span></Link>
                <Link className='navButton'><img src={truck}/><span>Veiculos</span></Link>
                <Link className='navButton'><img src={rota}/><span>Rotas</span></Link>
                <Link className='navButton'><img src={manutencao}/><span>Manutenções</span></Link>
                </div>
                <button className='botaoSair'><span>Sair</span><img src={logout}></img></button>
            </section>
        </div>
    )
}