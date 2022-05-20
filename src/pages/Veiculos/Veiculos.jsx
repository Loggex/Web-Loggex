import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import check from "../../assets/checkmark.svg";
import chevron from "../../assets/chevronDir.svg";
import { useHistory } from "react-router";
import { BsPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import api from "../../Services/api";

import "../../assets/App.css";

export default function Veiculos() {
  const [listaVeiculos, setListaVeiculos] = useState([]);

  async function buscarVeiculos() {
    await axios("http://localhost:5000/api/veiculos", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("usuario-login"),
      },
    })
      .then((resposta) => {
        if (resposta.status === 200) {
          setListaVeiculos(resposta.data);
        }
      })

      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    buscarVeiculos();
  });

  function maisRecenteDesc(objeto) {
    if (objeto.length > 0) {
      return objeto.reduce((prev, current) =>
        prev.idManutencao > current.idManutencao ? prev : current
      ).descricao;
    } else {
      return null;
    }
  }
  const history = useHistory();

  const onVeiculo = (e) => {
    history.push("/Veiculo");
  };

  const onNavigate = (e) => {
    history.push("/CadastroVeiculos");
  };

  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main className="mainlista">
        <div className="posMain">
          <h1>Veículos</h1>

          {listaVeiculos.map((veiculo) => {
            return (
              <div className="card" key={veiculo.idVeiculo}>
                <img
                  src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
                  alt="imagem do carro"
                  className="imgVeiculo"
                />
                <div className="infoVeiculo">
                  <span className="nomeVeiculo">{veiculo.placa}</span>
                  <span className="textoVeiculo">{veiculo.quilometragem}</span>
                  <p></p>
                  <span className="textoVeiculo">
                    {maisRecenteDesc(veiculo.manutencos)}
                  </span>
                </div>
                <div className="estadoVeiculo">
                  <span>Operante</span>
                  <img src={check} alt="marca de ok" />
                </div>
                <Link className="next">
                  <img src={chevron} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="caixaPlus" /* to={"/veiculo/" + veiculo.idVeiculo} */>
          <BsPlusSquareFill onClick={onNavigate} className="goDirect" />
        </div>
      </main>
    </div>
  );
}
