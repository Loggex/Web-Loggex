import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import Route from '../../assets/route.svg'
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'

export default function Rotas(){
    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className='posMain'>
                    <h1>Rotas</h1>

                    <div className='card'>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo'/>
                        <div className='infoRota'>
                            <img src={Route} alt="Imagem de Rota" />
                            <div className='textosRota'>
                                <span className='rotaDestino'>Carapicuíba, SP</span>
                                <span className='rotaDestino'>Ouro Fino, MG</span>
                                <span className='rotaInfo'>Carga: Alimentos</span>
                                <span className='rotaInfo'>Data: 12/03/2022</span>
                                
                            </div>
                        </div>
                        <div className='estadoVeiculo'>
                            <span>Realizada</span>
                            <img src={check} alt="marca de ok" />
                        </div>
                        <div className='next'>
                            <img src={chevron} alt="" />
                        </div>
                    </div>

                    
                    
                </div>
            </main>
        </div>
    )
}