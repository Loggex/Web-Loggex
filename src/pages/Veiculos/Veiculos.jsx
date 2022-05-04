import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import chevron from '../../assets/chevronDir.svg'

import '../../assets/App.css'

export default function Veiculos(){

    const [ listaVeiculos, setListaVeiculos ] = useState( [] );
    const [ titulo, setTitulo ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );

    function buscarVeiculos() {
        console.log('vamos fazer a chamada para a API');

        // faz a chamada para a API usando axios
        axios('http://192.168.3.169:5000/api/Veiculos', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            // caso a resposta da requisição tenha um status code igual a 200
            if (resposta.status === 200) {
                // console.log(resposta.data)
                // atualiza o state listaTiposUsuarios com os dados do corpo da resposta
                setListaVeiculos(resposta.data)
            }
        } )

        // caso ocorra algum erro, exibe no console do navegador este erro
        .catch(erro => console.log(erro));
    };

    useEffect( buscarVeiculos, [] );

    
 
    


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