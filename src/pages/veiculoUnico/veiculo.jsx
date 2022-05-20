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
  const [show, setShow] = useState([]);

  /* function toggleButton(){
    let
  } */

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
              <select className="infoPerguntaInput2">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>

            <div className="containerveiculo2">
              <div className="infoVeiculo1">
                <div className="especInfoVeiculo">
                  <GoNote className="goFilePlaca" />
                  <p className="infoPerguntaPlaca">Placa:</p>

                  <input
                    className="infoPerguntaInput"
                    type="text"
                    placeholder="Digite aqui"
                  />
                </div>
                <div className="especInfoAno">
                  <IoCalendarOutline className="goCalendar" />
                  <p className="infoPerguntaExato">Ano de fabricação:</p>

                  <input
                    className="infoPerguntaInput"
                    type="text"
                    placeholder="Digite aqui"
                  />
                </div>
                <div className="especInfoVeiculo">
                  <BiMessageCheck className="goFileSeg" />
                  <p className="infoPerguntaSeg">Tem seguro:</p>

                  <select className="infoPerguntaInput">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                </div>
              </div>

              <div className="infoVeiculo1">
                <div className="especInfoVeiculo">
                  <FaRoad className="goFile" />
                  <p className="infoPergunta">Quilometragem:</p>
                  <input
                    className="infoPerguntaInput"
                    type="text"
                    placeholder="Digite aqui"
                  />

                  {/* <p className="infoResposta">27.000km</p> */}
                </div>
                <div className="especInfoVeiculo">
                  <BiColorFill className="goColorVei" />
                  <p className="infoPergunta">Cor:</p>

                  <input
                    className="infoPerguntaInput"
                    type="text"
                    placeholder="Digite aqui"
                  />
                </div>
                <div className="especInfoChassi">
                  <IoMdCar className="goFileChassi" />
                  <p className="infoPerguntaChassi">Chassi:</p>

                  <input
                    className="infoPerguntaInput"
                    type="text"
                    placeholder="Digite aqui"
                  />
                </div>
              </div>
            </div>
            <div className="containerprincLast">
              <GiBackwardTime className="goOp" />
              <p className="infoPergunta">Último Registro:</p>
              <p className="infoResposta">"O escapamento foi consertado"</p>
            </div>
            <div className="boxRegistroCheck">
              <Link className="btnManu">
                <span className="editP" value={setShow}>
                  Editar registros
                </span>
              </Link>
              <Link className="btnManu">
                <span className="editP">Checklist</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
