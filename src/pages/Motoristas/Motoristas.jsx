import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'
import { useHistory } from 'react-router';
import {BsPlusSquareFill} from 'react-icons/bs'

export default function Motoristas() {
    const [listaMotorista, setListaMotorista] = useState([]);

    
  const history = useHistory();

  const onSubmit = (e) => {
    history.push("/Motorista");
  };

  const onNavigate = (e) => {
    history.push("/cadastroMotorista")
}



    async function buscarMotoristas() {

        await axios('http://deploy-loggex-backend.azurewebsites.net/api/motoristas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setListaMotorista(resposta.data)
                }
            })

            .catch(erro => console.log(erro));
    };

    useEffect( () =>{
        buscarMotoristas();
    });
    return (
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main className='mainlista'>
                <div className='posMain'>
                    <h1>Motoristas</h1>
                    {
                        listaMotorista.map((motorista) => {
                            return (
                                <div className='card'  key={motorista.idMotorista}>
                                    <img src={'http://deploy-loggex-backend.azurewebsites.net/StaticFiles/Images/Jose.jpg'} alt="imagem do motorista" className='imgMotorista' />

                                    <div className='posMotorista'>
                                        <div className='infoMotorista'>
                                            <span className='nomeVeiculo'>{motorista.idUsuarioNavigation.nome}</span>
                                            <span className='textoVeiculo'>{motorista.numCelular}</span>
                                        </div>
                                    </div>
                                    <div className='next' onClick={onSubmit}>
                                        <img src={chevron} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="caixaPlus">
                    <BsPlusSquareFill onClick={onNavigate} className="goDirect"/>
                </div>
            </main>
        </div>
    )
}