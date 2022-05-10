import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'
import { useHistory } from 'react-router'; 

import '../../assets/App.css'

export default function Veiculos(){

    const [ listaVeiculos, setListaVeiculos ] = useState( [] );



    async function buscarVeiculos() {

        await axios('http://localhost:3000/veiculos', {
            headers : {
                'Authorization' : 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlbWVsb0BlbWFpbC5jb20iLCJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsIlRlbGVmb25lIjoiMTE5ODc2NTQzMjEiLCJleHAiOjE2NTIxODk5NDUsImlzcyI6IkxvZ2dleC53ZWJBUEkiLCJhdWQiOiJMb2dnZXgud2ViQVBJIn0.HkAdcmpeNAE4Cr8RByhWIQf5rDnPfSRCVhT0FgmmVL8"//localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            if (resposta.status === 200) {
                setListaVeiculos(resposta.data)
            }
        } )

        .catch(erro => console.log(erro));
    };

    useEffect( () =>{
        buscarVeiculos();
    });

    function maisRecenteDesc(objeto){
        return objeto.reduce((prev, current) => (prev.idManutencao > current.idManutencao) ? prev : current)   
     }
    const history = useHistory();

    const onVeiculo = (e) => {
        history.push("/Veiculo");
      };

    
 
    


    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className='posMain'>
                    <h1>Veículos</h1>

                    {
                        listaVeiculos.map( (veiculo) => {
                            return (
                                <div className='card' key={veiculo.idVeiculo}>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo'/>
                        <div className='infoVeiculo'>
                            <span className='nomeVeiculo'>{veiculo.placa}</span>
                            <span className='textoVeiculo'>{veiculo.quilometragem}</span>
                            <p>
                            </p>
                            <span className='textoVeiculo'>{maisRecenteDesc(veiculo.manutencos).descricao}</span>
                        </div>
                        <div className='estadoVeiculo'>
                            <span>Operante</span>
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