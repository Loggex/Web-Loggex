import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg';
import chevron from '../../assets/chevronDir.svg';


import '../../assets/Veiculo.css'

export default function Veiculo() {
    return (
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className="boxVeiculo">
                    <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo' />
                </div>
                <div className="boxcontainerveiculo">
                    <h1 className="NomeVeiculo">Volvo Sh 540 6x4</h1>

                </div>

                <div className="containerInfoVeiculo">
                    <div className="containerVeiculo">

                        <div className="containerprinc">
                            <p className="infoPergunta">Operacional:</p>
                            <p className="infoResposta">Sim</p>
                        </div>
                        <div className="containerveiculo2">
                            <div className="infoVeiculo1">





                                <div className="especInfo">
                                    <img src="carbon_license" alt="" />
                                    <p className="infoPergunta">Placa:</p>

                                    <p className="infoResposta">BRAE2019</p>
                                </div>
                                <div className="especInfo">
                                    <p className="infoPergunta">Ano de fabricação:</p>

                                    <p className="infoResposta">04/05/2015</p>
                                </div>
                                <div className="especInfo">
                                    <p className="infoPergunta">Tem seguro:</p>

                                    <p className="infoResposta">Sim</p>
                                </div>



                            </div>

                            <div className="infoVeiculo1">





                                <div className="especInfo">
                                    <img src="carbon_license" alt="" />
                                    <p className="infoPergunta">Placa:</p>

                                    <p className="infoResposta">BRAE2019</p>
                                </div>
                                <div className="especInfo">
                                    <p className="infoPergunta">Ano de fabricação:</p>

                                    <p className="infoResposta">04/05/2015</p>
                                </div>
                                <div className="especInfo">
                                    <p className="infoPergunta">Tem seguro:</p>

                                    <p className="infoResposta">Sim</p>
                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}