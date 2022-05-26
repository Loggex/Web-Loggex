import Navbar from "../../Components/Navbar";
import "../../assets/cadastroRotas.css";
import React, { useState } from 'react';
import axios from 'axios';

export default function CadastroRotas(){
    const [origemInput, setOrigem] = useState('');
    const [veiculoInput, setVeiculo] = useState('');
    const [partidaInput, setPartida] = useState('');
    const [cargaInput, setCarga] = useState('');
    const [pesoCargaInput, setPeso] = useState('');
    const [destinoInput, setDestino] = useState('');
    const [motoristaInput, setMotorista] = useState('');
    const [chegadaInput, setChegada] = useState('');
    const [descricaoInput, setDescricao] = useState('');
    const [volumeInput, setVolume] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function CadastrarRota(rota){
        rota.preventDefault();

        setIsLoading(true);

        axios.post('http://localhost:5000/api/rotas', {

            origem: origemInput,
            idVeiculo: veiculoInput,
            dataPartida: partidaInput,
            carga: cargaInput,
            pesoBrutoCarga: pesoCargaInput,
            destino: destinoInput,
            idMotorista: motoristaInput,
            dataChegada: chegadaInput,
            descricao: descricaoInput,
            volumeCarga: volumeInput

        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {
                    console.log('Rota cadastrada!');

                    setOrigem('')
                    setVeiculo('')
                    setPartida('')
                    setCarga('')
                    setPeso('')
                    setDestino('')
                    setMotorista('')
                    setChegada('')
                    setDescricao('')
                    setVolume('')
                }
            })

            .catch(erro => console.log(erro), setInterval(() => {
                setIsLoading(false)
            }, 5000));
    };

    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastro">
                        <h1>Cadastrar nova rota</h1>
                            <form action="" onSubmit={CadastrarRota} className="formCadastro">
                                <div className="formularios">
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Origem</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Veículo</h3>
                                        <input type="text" onChange={(campo) => setVeiculo(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Partida</h3>
                                        <input type="text" onChange={(campo) => setPartida(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Carga</h3>
                                        <input type="text" onChange={(campo) => setCarga(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Peso da carga</h3>
                                        <input type="text" onChange={(campo) => setPeso(campo.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Destino</h3>
                                        <input type="text" onChange={(campo) => setDestino(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Motorista</h3>
                                        <input type="text" onChange={(campo) => setMotorista(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Chegada</h3>
                                        <input type="text" onChange={(campo) => setChegada(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Descrição</h3>
                                        <input type="text" onChange={(campo) => setDescricao(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Volume da carga</h3>
                                        <input type="text" onChange={(campo) => setVolume(campo.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" name="cadastrar" id="botaoCadastrar">Cadastrar</button>
                            </form>
                            
                               
                    </div>
                </div>
            </main>
        </div>
    )
}