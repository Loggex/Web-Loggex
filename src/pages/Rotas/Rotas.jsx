import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import Route from '../../assets/route.svg'
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'

export default function Rotas(){
    
    const [ listaRotas, setListaRotas ] = useState( [] );



    async function buscarRotas() {

        await axios('http://localhost:5000/api/Rotas', {
            headers : {
                'Authorization' : 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlbWVsb0BlbWFpbC5jb20iLCJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsIlRlbGVmb25lIjoiMTE5ODc2NTQzMjEiLCJleHAiOjE2NTIxODk5NDUsImlzcyI6IkxvZ2dleC53ZWJBUEkiLCJhdWQiOiJMb2dnZXgud2ViQVBJIn0.HkAdcmpeNAE4Cr8RByhWIQf5rDnPfSRCVhT0FgmmVL8"//localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            if (resposta.status === 200) {
                setListaRotas(resposta.data)
            }
        } )

        .catch(erro => console.log(erro));
    };

    useEffect( () =>{
        buscarRotas();
    });
    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className='posMain'>
                    <h1>Rotas</h1>
                    
                    {
                        listaRotas.map( (rotas) => {
                            return(
                        <div className='card'>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo'/>
                        <div className='infoRota'>
                            <img src={Route} alt="Imagem de Rota" />
                            <div className='textosRota'>
                                <span className='rotaDestino'>{rotas.origem}</span>
                                <span className='rotaDestino'>{rotas.destino}</span>
                                <span className='rotaInfo'>{rotas.carga}</span>
                                <span className='rotaInfo'>{rotas.dataPartida}</span>
                                
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
                                )
                                } )
                            }
                    
                    
                </div>
            </main>
        </div>
    )
}