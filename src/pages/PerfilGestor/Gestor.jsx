import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import check from "../../assets/checkmark.svg";
import chevron from "../../assets/chevronDir.svg";
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

import "../../assets/Gestor.css";
import { Link } from "react-router-dom";

export default function Gestor() {
    // function listar() {
      //   api('/Alunos/sala/1')
      //     .then(resposta => {
      //       if (resposta.status === 200) {
      //         console.log('Lista')
      //         console.log(resposta)
      //         setListaAlunos(resposta.data)
      //       }
      //     })
      //     .catch(erro => console.log(erro))
      // }
    
      // useEffect(listarAlunos, []);
  

  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main>
        <div className="boxGestor">
          <img
            src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
            alt="imagem do carro"
            className="imgGestor"
          />
        </div>
        <div className="boxcontainerGestor">
          <h1 className="NomeGestor">Nome do Gestor</h1>
        </div>

        <div className="containerInfoGestor">
          <div className="containerGestor">
            <div className="containerGestor2">
              <div className="infoGestor1">
                <div className="infoVei">
                  <div className="especInfoGestor1">
                    <p className="infoTituloGest">Dados do Gestor:</p>
                  </div>
                  <div className="especInfoGestor">
                    <AiOutlineMail className="goFileGest" />

                    <p className="infoPergunta">Email:</p>

                    <p className="infoResposta">Jojo@email.com</p>
                  </div>
                  <div className="especInfoGestor">
                    <AiOutlineMail className="goFileGest" />

                    <p className="infoPergunta">CPF:</p>

                    <p className="infoResposta">12345678</p>
                  </div>
                  <div className="especInfoGestor">
                    <GiSmartphone className="goFileGestph" />

                    <p className="infoPerguntaTel">Telefone:</p>

                    <p className="infoResposta">Jojo@Telefone.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
