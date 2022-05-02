import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'

import '../../assets/App.css'

export default function Veiculos(){

    /* const  [veiculo, setVeiculo] = useState(); */


    
 
    


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
                            <p>Última alteração: 13/04:</p>
                            <span className='textoVeiculo'>“O escapamento foi consertado”</span>
                        </div>
                        <div className='estadoVeiculo'>
                            <span>Operante</span>
                            <img src={check} alt="marca de ok" />
                        </div>
                        <div className='sidebarVeiculo'>
                            <img src={chevron} alt="" />
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}