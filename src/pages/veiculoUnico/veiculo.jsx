import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { GoNote } from "react-icons/go";
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { BiMessageCheck } from "react-icons/bi";
import { BiColorFill } from "react-icons/bi";
import { IoMdCar } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";

import "../../assets/Veiculo.css";
import { Link } from "react-router-dom";

export default function Veiculo() {
  const [nomeVeiculo, setNomeVeiculo] = useState("");




  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main>
        <div className="boxVeiculo">
          <img
            src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
            alt="imagem do carro"
            className="imgVeiculo"
          />
        </div>
        <div className="boxcontainerveiculo">
          <h1 className="NomeVeiculo">Volvo Sh 540 6x4</h1>
        </div>

        <div className="containerInfoVeiculo">
          <div className="containerVeiculo">
            <div className="especInfoVeiculo">
              <MdOutlineCheckCircle className="goOp2" />
              <p className="infoPergunta">Operacional:</p>
              <p className="infoResposta">Sim</p>
            </div>

            <div className="containerveiculo2">
              <div className="infoVeiculo1">
                <div className="especInfoVeiculo">
                  <GoNote className="goFilePlaca" />
                  <p className="infoPergunta">Placa:</p>

                  <p className="infoResposta">BRAE2019</p>
                </div>
                <div className="especInfoAno">
                  <IoCalendarOutline className="goCalendar" />
                  <p className="infoPerguntaExato">Ano de fabricação:</p>

                  <p className="infoResposta">04/05/2015</p>
                </div>
                <div className="especInfoVeiculo">
                  <BiMessageCheck className="goFileSeg" />
                  <p className="infoPerguntaExato">Tem seguro:</p>

                  <p className="infoResposta">Sim</p>
                </div>
              </div>

              <div className="infoVeiculo1">
                <div className="especInfoVeiculo">
                  <FaRoad className="goFile"/>
                  <p className="infoPergunta">Quilometragem:</p>

                  <p className="infoResposta">27.000km</p>
                </div>
                <div className="especInfoVeiculo">
                  <BiColorFill className="goColor" />
                  <p className="infoPergunta">Cor:</p>

                  <p className="infoResposta">Vermelho</p>
                </div>
                <div className="especInfoChassi">
                  <IoMdCar className="goFile" />
                  <p className="infoPerguntaChassi">Chassi:</p>

                  <p className="infoResposta">3AA eAG510 2c 6B1818</p>
                </div>
              </div>
            </div>
            <div className="containerprincLast">
              <GiBackwardTime className="goOp" />
              <p className="infoPergunta">Último Registro:</p>
              <p className="infoResposta">"O escapamento foi consertado"</p>
            </div>
            <Link className="btnManu">
              <span className="editP">
                Editar registros / Agendar manutenção
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
