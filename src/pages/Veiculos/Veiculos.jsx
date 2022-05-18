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

        await axios('http://localhost:5000/api/veiculos', {
            headers : {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            if (resposta.status === 200) {
                setListaVeiculos(resposta.data)
            }
        } )

        .catch(erro => 
            console.log(erro)

            );
    };

    useEffect( () =>{
        buscarVeiculos();
    });

    const history = useHistory();

    const onVeiculo = (e) => {
        history.push("/Veiculo");
      };

    
 
    


    return(
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main className='mainlista'>
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
                            <span className='textoVeiculo'>{veiculo.descricao}</span>
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