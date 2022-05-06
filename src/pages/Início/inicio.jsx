import React, {useState, useEffect} from 'react';
import axios from 'axios';
import blob from '../../assets/blob.svg'
import semi from '../../assets/semi.svg'
import ilustracao from '../../assets/ilustracao.svg'
import {Link} from 'react-router-dom'


export default function Inicio(){
    return(
        <div id='backgroundStart'>
            <main className='mainStart'>
                <div id='posicaoTexto'>
                    <img src={semi} id='logoSemi' />
                    <div className='sloganImg'>
                        <h1 id='tituloStart'>Administre os veículos da sua frota</h1>
                        <img src={ilustracao} alt="ilustração em que 2 pessoas estão carregando uma caixa e uma terceira pilota um caminhão, ao fundo, um depósito com caixas de papelão empilhadas e duas nuvens no céu" id='ilusStart'/>
                    </div>
                </div>
                    <img src={blob} id='blobStart' />
                    <div id='posBlob'>
                      <h2 id='subtituloStart'>Conecte-se com seu e-mail e senha </h2>
                      <Link to='/login' className='botaoLogin'><span>Conectar-se</span></Link>
                    </div>
                </main>
        </div>
    )
}