import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'

export default function Manutencoes(){
    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className='posMain'>
                    <h1>Manutenções - OIÇA927Q</h1>

                    <div className='card'>
                        <div className='infoManutencao'>
                            <span className='nomeManutencao'>Manutenção #111</span>
                            <p className='textoManutencao'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                        <div className='estadoManutencao'>
                            <span>Realizada</span>
                            <img src={check} alt="marca de ok" />
                        </div>

                    </div>
                    
                </div>
            </main>
        </div>
    )
}