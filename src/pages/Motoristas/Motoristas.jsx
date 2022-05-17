import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'
import { useHistory } from 'react-router';

export default function Motoristas() {
    const [listaMotorista, setListaMotorista] = useState([]);

    
  const history = useHistory();

  const onSubmit = (e) => {
    history.push("/Motorista");
  };



    async function buscarMotoristas() {

        await axios('http://localhost:5000/api/motoristas', {
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
                                    <img src={'http://localhost:5000/StaticFiles/Images/' + motorista.idUsuarioNavigation.imgPerfil} alt="imagem do motorista" className='imgMotorista' />

                                    <div className='posMotorista'>
                                        <div className='infoMotorista'>
                                            <span className='nomeVeiculo'>{motorista.idUsuarioNavigation.nome}</span>
                                            <span className='textoVeiculo'>{motorista.idUsuarioNavigation.numCelular}</span>
                                        </div>
                                        <span id='emailMotorista'>{'('+motorista.idUsuarioNavigation.email+')'}</span>
                                    </div>
                                    <div className='next' onClick={onSubmit}>
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