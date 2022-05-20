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
import api from "../../Services/api"
import {RiProfileLine} from "react-icons/ri"

import '../../assets/Motorista.css'
import { Link } from 'react-router-dom';

export default function Motorista() {

    /* const [user, setUser] = useState();

    useEffect(() => {
        api
          .get("/usuarios/2")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
 */

    return (
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main>
                <div className="boxMotorista">
                    <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo' />
                </div>
                <div className="boxcontainerMotorista">
                    <h1 className="NomeMotorista">José João Barros</h1>

                </div>

                <div className="containerInfoMotorista">
                    <div className="containerMotorista">

                        <div className="containerMotorista2">
                            <div className="infoMotorista1">
                                <div className="infoMot">



                                    <div className="especInfoVeiculo">

                                        <p className="infoTitulo">Dados do Motorista:</p>
                                    </div>
                                    <div className="especInfoVeiculo">
                                        <MdOutlineCheckCircle className="goFileMot" />

                                        <p className="infoPergunta">Operacional:</p>

                                        <p className="infoResposta">Sim</p>
                                    </div>
                                    <div className="especInfoVeiculo">
                                        <AiOutlineMail className="goFileMot" />

                                        <p className="infoPergunta">Email:</p>

                                        <p className="infoResposta">Jojo@email.com</p>
                                    </div>
                                    <div className="especInfoVeiculo">
                                        <RiProfileLine className="goFileMot" />

                                        <p className="infoPergunta">CPF:</p>

                                        <p className="infoResposta">12345678</p>
                                    </div>
                                    <div className="especInfoVeiculo">
                                        <GiSmartphone className="goFileMot" />

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