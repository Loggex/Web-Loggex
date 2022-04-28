import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'

export default function Motoristas(){
    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className='posMain'>
                    <h1>Motoristas</h1>

                    <div className='card'>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do motorista" className='imgMotorista'/>

                        <div className='posMotorista'>
                            <div className='infoMotorista'>
                                <span className='nomeVeiculo'>José João da Silva</span>
                                <span className='textoVeiculo'>(11) 94783-5489</span>
                            </div>
                            <span id='emailMotorista'>(josejoaobarros132@gmail.com)</span>
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