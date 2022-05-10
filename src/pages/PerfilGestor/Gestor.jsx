import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import api from "../../Services/api";
import { parseJwt } from "../../Services/auth";

import "../../assets/Gestor.css";

export default function Gestor() {
  const [usuarioLogado, setUsuarioLogado] = useState({});

  async function BuscarUsuario() {
    const usuario = await parseJwt();

    const requisicao = await api.get('/usuarios/${usuario.jti}');

    setUsuarioLogado(requisicao.data);
  }

  useEffect(BuscarUsuario, [])

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
          <h1 className="NomeGestor">Nome gestor</h1>
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
