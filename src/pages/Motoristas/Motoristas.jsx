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

        await axios('http://localhost:5000/api/Motoristas', {
            headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlbWVsb0BlbWFpbC5jb20iLCJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsIlRlbGVmb25lIjoiMTE5ODc2NTQzMjEiLCJleHAiOjE2NTIxODk5NDUsImlzcyI6IkxvZ2dleC53ZWJBUEkiLCJhdWQiOiJMb2dnZXgud2ViQVBJIn0.HkAdcmpeNAE4Cr8RByhWIQf5rDnPfSRCVhT0FgmmVL8"//localStorage.getItem('usuario-login')
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
            <main>
                <div className='posMain'>
                    <h1>Motoristas</h1>
                    {
                        listaMotorista.map((motorista) => {
                            return (
                                <div className='card'  key={motorista.idMotorista}>
                                    <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do motorista" className='imgMotorista' />

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