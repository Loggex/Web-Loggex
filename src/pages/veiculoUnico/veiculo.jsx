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
  const [veiculo, setVeiculo] = useState();
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  async function buscarVeiculo() {
    await axios(
      "http://deploy-loggex-backend.azurewebsites.net/api/veiculos/placa/" +
        window.location.pathname.split("/")[2],
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("usuario-login"),
        },
      }
    )
      .then((resposta) => {
        if (resposta.status === 200) {
          setVeiculo(resposta.data);
        }
      })

      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    buscarVeiculo();
  });

  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main className="maincomnav">
        <div className="boxVeiculo">
          <img
            src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
            alt="imagem do carro"
            className="imgVeiculo"
          />
        </div>
        <div className="boxcontainerveiculo">
          <h1 className="NomeVeiculo">{veiculo?.placa}</h1>
        </div>

        <div className="containerInfoVeiculo">
          <div className="containerVeiculo">
            <div className="especInfoVeiculo">
              <MdOutlineCheckCircle className="goOp2" />
              <p className="infoPergunta">Operacional:</p>
              {veiculo?.estadoVeiculo === true ? (
                <p className="infoResposta">Sim</p>
              ) : (
                <p className="infoResposta">Não</p>
              )}
            </div>

            <div className="containerveiculo2">
              <div className="infoVeiculo1">
                <div className="especInfoVeiculo">
                  <GoNote className="goFilePlaca" />
                  <p className="infoPergunta">Placa:</p>

                  <p className="infoResposta">{veiculo?.placa}</p>
                </div>
                <div className="especInfoAno">
                  <IoCalendarOutline className="goCalendar" />
                  <p className="infoPerguntaExato">Ano de fabricação:</p>

                  <p className="infoResposta">{veiculo?.anoFabricacao}</p>
                </div>
                <div className="especInfoVeiculo">
                  <BiMessageCheck className="goFileSeg" />
                  <p className="infoPerguntaExato">Tem seguro:</p>

                  {veiculo?.seguro === true ? (
                    <p className="infoResposta">Sim</p>
                  ) : (
                    <p className="infoResposta">Não</p>
                  )}
                </div>
              </div>

              <div className="infoVeiculo1">
                <div className="especInfoVeiculo">
                  <FaRoad className="goFile" />
                  <p className="infoPergunta">Quilometragem:</p>

                  <p className="infoResposta">
                    {veiculo?.quilometragem + "km"}
                  </p>
                </div>
                <div className="especInfoVeiculo">
                  <BiColorFill className="goColorVei" />
                  <p className="infoPergunta">Cor:</p>

                  <p className="infoResposta">{veiculo?.cor}</p>
                </div>
                <div className="especInfoChassi">
                  <IoMdCar className="goFileChassi" />
                  <p className="infoPerguntaChassi">Chassi:</p>

                  <p className="infoRespostaChassi">{veiculo?.chassi}</p>
                </div>
              </div>
            </div>
            <div className="containerprincLast">
              <GiBackwardTime className="goOp" />
              <p className="infoPergunta">Último Registro:</p>
              <p className="infoResposta">{veiculo?.descricao}</p>
            </div>
            <div className="boxRegistroCheck">
              <Link className="btnManu">
                <span className="editP">Editar registros</span>
              </Link>

              <Link to={"/checklist/" + veiculo?.placa} className="btnManu">
                <span className="editP">Checklist</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
