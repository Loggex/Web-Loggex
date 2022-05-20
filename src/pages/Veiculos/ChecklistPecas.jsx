import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import negativo from '../../assets/x.svg'
import chevron from '../../assets/chevronDir.svg'
import { useHistory } from 'react-router';

export default function Checklist() {
    const [listaPecas, setlistaPecas] = useState([]);





    async function buscarPecas() {

        await axios('http://localhost:5000/api/pecas/checklist/CZN4342', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setlistaPecas(resposta.data)
                }
            })

            .catch(erro => console.log(erro));
    };

    useEffect( () =>{
        buscarPecas();
    });
    return (
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main className='mainlista'>
                <div className='posMain'>
                    <h1>Checklist</h1>
                    {
                        listaPecas.map((peca) => {
                            return (
                                <div className='card'  key={peca.idPeca}>
                                    <div className='posChecklist'>
                                        <div className='infoMotorista'>
                                            <span className='nomePeca'>{peca.idTipoPecaNavigation.nomePeça}</span>
                                            <span  className='ALteracaoPeca'>Última alteração em:</span>

                                        </div>
                                    </div>
                                    {   
                            peca.estadoPeca === true &&
                                <div className='estadoVeiculoTrue'>
                                <span>Operante</span>
                                <img src={check} alt="marca de ok" />
                                </div>
                        }
                        
                        {   
                            peca.estadoPeca === false &&
                                <div className='estadoVeiculoFalse'>
                                <span>Não operante</span>
                                <img src={negativo} alt="marca de ok" />
                                </div>
                        }
                                    <div className='next'>
                                        <img src={chevron} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </main>
        </div>
    )
}