import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';

export default function Veiculos(){
    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className='posMain'>
                    <h1>Veículos</h1>

                    <div className='cardCarro'>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo'/>
                        <div className='infoVeiculo'>
                            <span className='nomeVeiculo'>Veiculo</span>
                            <span className='textoVeiculo'>Quilometragem: XXXkm</span>
                            <span className='textoVeiculo'>“O escapamento foi consertado”</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}