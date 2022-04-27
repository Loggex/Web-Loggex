import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg';
import chevron from '../../assets/chevronDir.svg';
import { GoNote } from "react-icons/go";
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { BiMessageCheck } from "react-icons/bi";
import { BiColorFill } from "react-icons/bi";
import { IoMdCar } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";

import '../../assets/Motorista.css'
import { Link } from 'react-router-dom';

export default function Motorista() {
    return (
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className="boxVeiculo">
                    <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo' />
                </div>
                <div className="boxcontainerveiculo">
                    <h1 className="NomeVeiculo">José João Barros</h1>

                </div>

                <div className="containerInfoVeiculo">
                    <div className="containerVeiculo">

                        <div className="containerveiculo2">
                            <div className="infoVeiculo1">
                                <div className="infoVei">



                                    <div className="especInfo">

                                        <p className="infoTitulo">Dados do Motorista:</p>
                                    </div>
                                    <div className="especInfo">
                                        <MdOutlineCheckCircle className="goFile" />

                                        <p className="infoPergunta">Operacional:</p>

                                        <p className="infoResposta">Sim</p>
                                    </div>
                                    <div className="especInfo">
                                        <AiOutlineMail className="goFile" />

                                        <p className="infoPergunta">Email:</p>

                                        <p className="infoResposta">Jojo@email.com</p>
                                    </div>
                                    <div className="especInfo">
                                        <AiOutlineMail className="goFile" />

                                        <p className="infoPergunta">CPF:</p>

                                        <p className="infoResposta">12345678</p>
                                    </div>
                                    <div className="especInfo">
                                        <GiSmartphone className="goFile" />

                                        <p className="infoPergunta">Telefone:</p>

                                        <p className="infoResposta">Jojo@email.com</p>
                                    </div>

                                </div>
                            </div>



                        </div>



                    </div>




                </div>

            </main>
        </div >
    )
}