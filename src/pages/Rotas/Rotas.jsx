import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import Route from "../../assets/route.svg";
import check from "../../assets/checkmark.svg";
import chevron from "../../assets/chevronDir.svg";
import { useHistory } from "react-router";
import { BsPlusSquareFill } from "react-icons/bs";

export default function Rotas() {
  const [listaRotas, setListaRotas] = useState([]);
  const history = useHistory();

  const onSubmit = (e) => {
    history.push("/Rota");
  };

  const onNavigate = (e) => {
    history.push("/CadastroRotas");
  };

  async function buscarRotas() {
    await axios("http://localhost:5000/api/rotas", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("usuario-login"),
      },
    })
      .then((resposta) => {
        if (resposta.status === 200) {
          setListaRotas(resposta.data);
        }
      })

      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    buscarRotas();
  });
  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main className="mainlista">
        <div className="posMain">
          <h1>Rotas</h1>

          {listaRotas.map((rotas) => {
            return (
              <div className="card">
                <img
                  src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
                  alt="imagem do carro"
                  className="imgVeiculo"
                />
                <div className="infoRota">
                  <img src={Route} alt="Imagem de Rota" />
                  <div className="textosRota">
                    <span className="rotaDestino">{rotas.origem}</span>
                    <span className="rotaDestino">{rotas.destino}</span>
                    <span className="rotaInfo">{rotas.carga}</span>
                    <span className="rotaInfo">{rotas.dataPartida}</span>
                  </div>
                </div>
                <div className="estadoVeiculo">
                  <span>Realizada</span>
                  <img src={check} alt="marca de ok" />
                </div>
                <div className="next" onClick={onsubmit}>
                  <img src={chevron} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="caixaPlus">
          <BsPlusSquareFill onClick={onNavigate} className="goDirect" />
        </div>
      </main>
    </div>
  );
}
